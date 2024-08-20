import { TicketService } from "../services/ticket.service";
import { Prisma } from "@prisma/client";
import { Controller } from "@nestjs/common";

@Controller('api/ticket')
export class TicketController {
    constructor (private readonly ticketService: TicketService) {}
}