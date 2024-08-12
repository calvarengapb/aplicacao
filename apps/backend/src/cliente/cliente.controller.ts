import { Controller, Post, Body, Get } from '@nestjs/common';
import { Cliente, RegistrarCliente } from '@apps/core';
import { ClienteProvider } from './cliente.provider';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly repo: ClienteProvider) {}

  @Post('teste')
  async salvar(@Body() cliente: Cliente) {
    const casoDeUso = new RegistrarCliente(this.repo);
    casoDeUso.executar(cliente);
  }

  @Get()
  async buscarTodos() {
    return await this.repo.buscarTodos();
  }
}
