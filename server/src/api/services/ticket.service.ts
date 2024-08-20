import { Injectable } from "@nestjs/common";
import { Ticket, Prisma } from "@prisma/client";
import { PrismaService } from "./prisma.service";

@Injectable()
export class TicketService {
    constructor (private prisma: PrismaService) {}
}