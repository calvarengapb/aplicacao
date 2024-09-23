import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './domain/cliente';
import { Equal, Repository } from 'typeorm';
import { CreateClienteDto } from './domain/dto/Create-Cliente-DTO';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private ClienteRepo: Repository<Cliente>,
  ) {}

  async findAll(pEmpresa: number): Promise<Cliente[]> {
    return await this.ClienteRepo.find({
      where: {
        empresa: Equal(pEmpresa),
      },
    });
  }

  async findById(pEmpresa: number, pCodCliente: number): Promise<Cliente> {
    return await this.ClienteRepo.findOne({
      where: {
        id: pCodCliente,
        empresa: pEmpresa,
      },
    });
  }

  async save(
    pEmpresa: number,
    pClienteDTO: CreateClienteDto,
  ): Promise<Cliente> {
    const cliente = new Cliente(pClienteDTO);
    cliente.empresa = pEmpresa;
    try {
      return await this.ClienteRepo.save(cliente);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
