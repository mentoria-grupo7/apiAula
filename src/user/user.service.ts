import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class UserService {

    constructor(private prisma: PrismaService){}

    async create({email, nome, senha}: CreateUserDTO) {
        return await this.prisma.users.create({
            data: {
                nome,
                email,
                senha
            }
        })
    }

}