import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  somaNumero(): number {
    return 1 + 1;
  }

  cadastraProduto() {
    //cadastro no banco de dados
  }
}
