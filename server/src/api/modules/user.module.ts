import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "../services/prisma.service";
import { UserService } from "../services/user.service";

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [],
    providers: [PrismaService, UserService]
})

export class UserModule {}