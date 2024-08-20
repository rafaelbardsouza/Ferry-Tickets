import { Injectable } from "@nestjs/common";
import { Ticket, Prisma } from "@prisma/client";
import { PrismaService } from "./prisma.service";

@Injectable()
export class TicketService {
    constructor (private prisma: PrismaService) {}

    async getTicketById (ticketId: string) {
        return this.prisma.ticket.findUnique({ where: { id: ticketId } });
    }

    async getTicketByUser (userId: string) {
        return this.prisma.ticket.findMany({ where: { userId } }); 
    }

    async createTicket(data: Prisma.TicketCreateInput) {
        return this.prisma.ticket.create({ data });
    }

    async deleteTicket(ticketId: string) {
        return this.prisma.ticket.delete({ where: { id: ticketId } });
    }

    async useTicket(ticketId: string) {
        const Ticket = await this.prisma.ticket.findUnique({ where: { id: ticketId } });
        if (!Ticket) {
            return 'ticket not found';
        } else {
            const now = new Date();
            const twoHoursAhead = new Date(Ticket.createdAt);
            twoHoursAhead.setHours(twoHoursAhead.getHours() + 2);
            if (now > twoHoursAhead) {
                await this.prisma.ticket.update({
                    where: { id: ticketId },
                    data: { expired: true }
                })
                return 'ticket expired';
            } else {
                if(Ticket.uses >= 2) {
                    await this.prisma.ticket.update({
                        where: { id: ticketId },
                        data: { expired: true }
                    })
                    return 'ticket expired';
                } else {
                    const ticket = await this.prisma.ticket.findUnique({
                        where: { id: ticketId },
                        select: { uses: true }
                    });
                    
                    if (!ticket) {
                        throw new Error('Ticket not found');
                    }
                    
                    const newUses = ticket.uses + 1;
                    
                    return this.prisma.ticket.update({
                        where: { id: ticketId },
                        data: {
                            uses: newUses,
                            expired: newUses >= 2
                        }
                    });
                }
            }
        }
    }
}