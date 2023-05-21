import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController{

    constructor(private userService: UserService){}
    

    @Post()
    async create(@Body() body: CreateUserDTO) {

        return this.userService.create(body)
    }

    @Get()
    async read(){
        return this.userService.list()
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id) {
        return this.userService.findById(id)
    }

    @Put(':id')
    async update(@Body() body:UpdatePutUserDTO, 
                @Param('id', ParseIntPipe) id) {

        return this.userService.update(body, id)
    }

    @Patch(':id')
    async updatePartial(@Body() body: UpdatePatchUserDTO, 
                        @Param('id', ParseIntPipe) id){
                            
         return this.userService.updatePartial(body, id)
    }


    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id){
        return this.userService.delete(id)
    }
}