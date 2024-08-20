import { TicketService } from "../services/ticket.service";
import { Prisma } from "@prisma/client";
import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";

@Controller('api/ticket')
export class TicketController {
    constructor (private readonly ticketService: TicketService) {}

    @Get('user')
    getTicketByUser(@Query('id') id: string) {
        return this.ticketService.getTicketByUser(id);
    }

    @Get(':id')
    useTicket(@Param('id') id: string) {
        return this.ticketService.useTicket(id);
    }

    @Post()
    createTicket(@Body() data: Prisma.TicketCreateInput) {
        return this.ticketService.createTicket(data);
    }
}