import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './clientes/domain/cliente';
import TipoJuridico from './clientes/domain/genericas/TipoJuridico';
import { Endereco } from './clientes/domain/Endereco';
import TipoEndereco from './clientes/domain/genericas/TipoEndereco';
import { Cep } from './clientes/domain/Cep';

@Module({
  imports: [
    ClientesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.db',
      entities: [Cliente, TipoJuridico, Endereco, TipoEndereco, Cep],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
