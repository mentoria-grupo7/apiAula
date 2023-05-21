import { IsEmail, IsNumber, IsString, IsStrongPassword, MinLength } from "class-validator";

export class CreateUserDTO {

    @IsString()
    @MinLength(2)
    nome: string;

    @IsEmail()
    email: string;

    @IsStrongPassword({
        minLength: 2,
        minLowercase: 0,
        minNumbers: 0,
        minSymbols: 0,
        minUppercase: 0
    })
    senha: string;

}