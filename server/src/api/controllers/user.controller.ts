import { UserService } from "../services/user.service";
import { Prisma } from "@prisma/client";
import { Controller } from "@nestjs/common";

@Controller('api/user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
}