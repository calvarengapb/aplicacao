import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { DatabaseModule } from 'src/database/database.module';
import { clienteProviders } from './clientes.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientesController],
  providers: [...clienteProviders, ClientesService],
})
export class ClientesModule {}
