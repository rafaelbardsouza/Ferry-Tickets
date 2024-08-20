import { Injectable } from "@nestjs/common";
import { Ticket, Prisma } from "@prisma/client";
import { PrismaService } from "./prisma.service";

@Injectable()
export class TicketService {
    constructor (private prisma: PrismaService) {}

    async getTicketByUser (userId: string) {
        return this.prisma.ticket.findMany({ where: { userId } }); 
    }

    async createTicket(data: Prisma.TicketCreateInput) {
        return this.prisma.ticket.create({ data });
    }

    async useTicket(ticketId: string) {
        const Ticket = await this.prisma.ticket.findUnique({ where: { id: ticketId } });
        if (!Ticket) {
            return 'ticket not found';
        } else {
            if(Ticket.expired) {
                return 'ticket expired';
            } else {
                if(Ticket.uses >= 2) {
                    await this.prisma.ticket.update({
                        where: { id: ticketId },
                        data: { expired: true }
                    })
                    return 'ticket expired';
                } else {
                    return this.prisma.ticket.update({
                        where: { id: ticketId },
                        data: { uses: Ticket.uses + 1 }
                    });
                }
            }
        }
    }
}