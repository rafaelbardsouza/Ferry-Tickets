import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "../services/prisma.service";
import { TicketService } from "../services/ticket.service";
import { TicketController } from "../controllers/ticket.controller";

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [TicketController],
    providers: [PrismaService, TicketService]
})

export class TicketModule {}