import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './clientes/clientes.module';
import { Cliente } from './clientes/entities/cliente.entity';
import { Endereco } from './clientes/entities/endereco.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.db',
      entities: [Cliente, Endereco],
      synchronize: true,
    }),
    ClientesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
