import { UserService } from "../services/user.service";
import { Prisma } from "@prisma/client";
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('api/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() data: Prisma.UserCreateInput) {
        return this.userService.createUser(data);
    }

    @Post('login')
    async login(@Body() body: { username: string, password: string }) {
        const { username, password } = body;
        return this.userService.login(username, password);
    }
}