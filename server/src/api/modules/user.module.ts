import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "../services/prisma.service";
import { UserService } from "../services/user.service";
import { UserController } from "../controllers/user.controller";

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [UserController],
    providers: [PrismaService, UserService]
})

export class UserModule {}