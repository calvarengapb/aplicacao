import { Cliente, RepositorioCliente } from '@apps/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClienteSchema } from './entities/cliente.entity';

@Injectable()
export class ClienteProvider implements RepositorioCliente {
  constructor(
    @InjectRepository(ClienteSchema)
    private readonly banco: Repository<Cliente>,
  ) {}

  buscarTodos(): Promise<Cliente[]> {
    return this.banco.find();
  }

  salvar(cliente: Cliente): Promise<Cliente> {
    return this.banco.save(cliente);
  }
  buscarPorId(pId: number): Promise<Cliente> {
    return this.banco.findOne({
      where: {
        id: pId,
      },
    });
  }
  buscarPorNome(pNome: string): Promise<Cliente> {
    return this.banco.findOne({
      where: {
        nome: pNome,
      },
    });
  }
}
