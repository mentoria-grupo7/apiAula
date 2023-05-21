import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";


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


    async list() {
        return await this.prisma.users.findMany()
    }

    async findById(id: number) {
        return await this.prisma.users.findUnique({
            where:{
                id
            }
        })
    }

    async update(data: UpdatePutUserDTO, id: number) {
        return await this.prisma.users.update({
            data,
            where: {
                id
            }
        })
    }

    async updatePartial(data: UpdatePatchUserDTO, id: number) {
        return await this.prisma.users.update({
            data,
            where: {
                id
            }
        })
    }

    async delete(id: number){
        return await this.prisma.users.delete({
            where: {
                id
            }
        })
    }


}