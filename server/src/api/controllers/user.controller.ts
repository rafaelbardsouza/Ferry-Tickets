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

    @Get()
    async login(@Body() data: { username: string, password: string }) {
        return this.userService.login(data.username, data.password);
    }
}