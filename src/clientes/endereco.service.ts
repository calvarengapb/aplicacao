import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import TipoEndereco from './domain/genericas/TipoEndereco';
import { Repository } from 'typeorm';
import { Endereco } from './domain/Endereco';
import { CreateEnderecoDto } from './domain/dto/Create-Endereco-DTO';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(TipoEndereco)
    private tipoEnderecoRepo: Repository<TipoEndereco>,

    @InjectRepository(Endereco)
    private EnderecoRepo: Repository<Endereco>,
  ) {}

  findEnderecoByCliente(
    pEmpresa: number,
    pCodCliente: number,
  ): Promise<Endereco[]> {
    return this.EnderecoRepo.find({
      where: {
        cliente: {
          id: pCodCliente,
          empresa: pEmpresa,
        },
      },
    });
  }

  async buscarTipoDeEndereco(
    pEmpresa: number,
    pTipoEndereco: number,
  ): Promise<TipoEndereco> {
    return await this.tipoEnderecoRepo.findOne({
      select: {
        id: true,
        descricao: true,
        obrigatorio: true,
      },
      where: {
        tgenId: 11,
        empId: pEmpresa,
        id: pTipoEndereco,
      },
    });
  }

  save(
    pCodTipoEndereco: number,
    pCodCliente: number,
    pEnderecoDto: CreateEnderecoDto,
  ) {
    const endereco = new Endereco(pEnderecoDto);
    endereco.cliente.id = pCodCliente;
    //endereco.tipoDeEndereco.id = pCodTipoEndereco;

    return endereco; //this.EnderecoRepo.save(endereco);
  }
}
