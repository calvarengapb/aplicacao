import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CepSchema } from 'src/cliente/entities/cep.entity';
import { ClienteSchema } from 'src/cliente/entities/cliente.entity';
import { EnderecoShema } from 'src/cliente/entities/endereco.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '.db/sql',
      entities: [ClienteSchema, EnderecoShema, CepSchema],
      synchronize: true,
    }),
  ],
})
export class DbModule {}
