import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import 'reflect-metadata';
import { DbModule } from './db/db.module';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [ClienteModule, DbModule],
  controllers: [AppController],
  providers: [AppService, DbModule],
})
export class AppModule {}
