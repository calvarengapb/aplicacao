import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { Endereco } from './entities/endereco.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
    @InjectRepository(Endereco)
    private readonly enderecoRepository: Repository<Endereco>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    const cliente = new Cliente(createClienteDto);
    const enderecos = createClienteDto.enderecos.map(
      (createEnderecoDto) => new Endereco(createEnderecoDto),
    );
    cliente.enderecos = enderecos;
    return await this.entityManager.save(cliente);
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
    return await this.entityManager.delete(Cliente, id);
  }

  async adicionarEndereco(pCliId: number, pEndereco: CreateEnderecoDto) {
    if (
      (await this.clienteRepository.count({ where: { cliId: pCliId } })) === 0
    ) {
      throw new NotFoundException('O CLiente informado não existe');
    }
    pEndereco.clieCliId = pCliId;
    const endereco = new Endereco(pEndereco);
    return await this.entityManager.save(endereco);
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
    return await this.entityManager.save(endereco);
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
    return await this.entityManager.delete(Endereco, endereco.cliEndId);
  }
}
