import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { DbModule } from 'src/db/db.module';
import { Cliente, Endereco } from '@apps/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CepSchema } from './entities/cep.entity';
import { EnderecoShema } from './entities/endereco.entity';
import { ClienteSchema } from './entities/cliente.entity';
import { ClienteProvider } from './cliente.provider';

@Module({
  imports: [
    DbModule,
    TypeOrmModule.forFeature([ClienteSchema, EnderecoShema, CepSchema]),
    Cliente,
    Endereco,
  ],
  controllers: [ClienteController],
  providers: [ClienteProvider],
})
export class ClienteModule {}
