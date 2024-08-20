import { Injectable } from "@nestjs/common";
import { User, Prisma } from "@prisma/client";
import { PrismaService } from "../services/prisma.service";

@Injectable()
export class UserService {
    constructor (private prisma: PrismaService) {}
}