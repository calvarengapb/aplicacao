import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

@Injectable()
export class ClientesMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    try {
      //TODO: Código da empresa deve ser enviado nas permissoes do usuario
      const codEmpresa = 1;
      req.empresa = codEmpresa;
      next();
    } catch (error) {
      throw new HttpException(
        'Não foi possível concluir a Requisição: ',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
