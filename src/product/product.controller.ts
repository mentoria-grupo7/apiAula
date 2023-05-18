import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductPutDTO } from './dto/update-productPut.dto';
import { UpdateProductPatchDTO } from './dto/update-productPatch.dto';

@Controller('/product')
export class ProductController {

  constructor(private readonly productService: ProductService) {}

  @Get()
  getProduct() {
    return {
      nome: 'Bola',
      preco: 'R$: 100',
      tipo: 'Quadrada'
    }
  }

  @Get(':id')
  getById(@Param() params) {
    return {
      params
    }
  }


  @Put(':id')
  alterarProduto(@Body() body: UpdateProductPutDTO, @Param() params) {
    return {
      body,
      params
    }
  }

  @Patch(':id')
  patchProduto(@Body() body: UpdateProductPatchDTO, @Param() params) {
    return {
      body,
      params
    }
  }

  @Post()
  cadastraProduto(@Body() body: CreateProductDTO) {
    return {
      body
    }
  }
}