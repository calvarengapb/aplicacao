import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { Endereco } from './entities/endereco.entity';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
  constructor(
    @Inject('CLIENTE_REPOSITORY')
    private readonly clienteRepository: Repository<Cliente>,
    @Inject('ENDERECO_REPOSITORY')
    private readonly enderecoRepository: Repository<Endereco>,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    const cliente = new Cliente();
    Object.assign(cliente, createClienteDto);
    const enderecos = createClienteDto.enderecos.map((createEnderecoDto) =>
      Object.assign(new Endereco(), createEnderecoDto),
    );
    cliente.enderecos = enderecos;
    return await this.clienteRepository.save(cliente);
  }

  findAll() {
    return this.clienteRepository.find();
  }

  findOne(id: number) {
    return this.clienteRepository.findOne({
      where: {
        cliId: id,
      },
      relations: {
        enderecos: true,
      },
    });
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const cliente = await this.findOne(id);
    Object.assign(cliente, updateClienteDto);

    return await this.clienteRepository.save(cliente);
  }

  async remove(id: number) {
    return await this.clienteRepository.delete(id);
  }

  async adicionarEndereco(pCliId: number, pEndereco: CreateEnderecoDto) {
    if (
      (await this.clienteRepository.count({ where: { cliId: pCliId } })) === 0
    ) {
      throw new NotFoundException('O CLiente informado não existe');
    }
    const endereco = new Endereco();
    Object.assign(endereco, pEndereco);
    //const cliente = new Cliente();
    endereco.clieCliId = await this.clienteRepository.findOne({
      select: {
        cliId: true,
      },
      where: { cliId: pCliId },
    });
    return await this.enderecoRepository.save(endereco);
  }

  async atualizarEndereco(
    pCliId: number,
    pCliEndId: number,
    pEndereco: UpdateEnderecoDto,
  ) {
    if (
      (await this.enderecoRepository.count({
        where: { clieCliId: { cliId: pCliId }, cliEndId: pCliEndId },
      })) === 0
    ) {
      throw new NotFoundException('O Endereco informado não existe');
    }
    const endereco = await this.enderecoRepository.findOne({
      where: { clieCliId: { cliId: pCliId }, cliEndId: pCliEndId },
    });
    Object.assign(endereco, pEndereco);
    await this.enderecoRepository.save(endereco);
    return endereco;
  }

  async deletarEndereco(pCliId: number, pCliEndId: number) {
    if (
      (await this.enderecoRepository.count({
        where: { clieCliId: { cliId: pCliId }, cliEndId: pCliEndId },
      })) === 0
    ) {
      throw new NotFoundException('O Endereco informado não existe');
    }
    const endereco = await this.enderecoRepository.findOne({
      where: { clieCliId: { cliId: pCliId }, cliEndId: pCliEndId },
    });
    return await this.enderecoRepository.delete(endereco.cliEndId);
  }
}
