import { Length, MaxLength, MinLength } from "class-validator";

export class CreateProductDTO {

    @MinLength(2)
    nome:string;

    @MinLength(2)
    preco:string;

    @Length(1, 3)
    tamanho:string;

}