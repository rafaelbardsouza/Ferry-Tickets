import { Injectable } from "@nestjs/common";
import { User, Prisma } from "@prisma/client";
import { PrismaService } from "../services/prisma.service";

@Injectable()
export class UserService {
    constructor (private prisma: PrismaService) {}

    async createUser(data: Prisma.UserCreateInput) {
        return this.prisma.user.create({ data });
    }

    async login(username: string, password: string) {
        const userData = await this.prisma.user.findUnique({ where: { username } });
        if (!userData) {
            return { message: 'user not found' };
        } else {
            if (userData.password === password) {
                return { message: 'login successful', user: userData };
            } else {
                return { message: 'incorrect password' };
            }
        }
    }
}