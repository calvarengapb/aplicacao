import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './domain/cliente';
import { ClientesMiddleware } from './clientes.middleware';
import { Endereco } from './domain/Endereco';
import { Cep } from './domain/Cep';
import { EnderecoService } from './endereco.service';
import TipoEndereco from './domain/genericas/TipoEndereco';
import TipoJuridico from './domain/genericas/TipoJuridico';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cliente,
      Endereco,
      Cep,
      TipoEndereco,
      TipoJuridico,
    ]),
  ],
  providers: [ClientesService, ClientesMiddleware, EnderecoService],
  controllers: [ClientesController],
  exports: [ClientesMiddleware],
})
export class ClientesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ClientesMiddleware).forRoutes(ClientesController);
  }
}
