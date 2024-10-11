import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Endereco } from './endereco.entity';
import { CreateClienteDto } from '../dto/create-cliente.dto';

@Entity({ name: 'CLIENTE' })
export class Cliente {
  @PrimaryGeneratedColumn({ name: 'CLI_ID' })
  cliId: number;
  @Column({ name: 'CLI_FANTASIA' })
  cliNomeFantasia: string;
  @Column({ name: 'CLI_RAZAO_SOCIAL' })
  cliRazaoSocial: string;
  @Column({ name: 'CLI_DOCUMENTO' })
  cliDocumento: string;
  @Column({ name: 'CLI_TELEFONE' })
  cliTelefone: string;

  @OneToMany(() => Endereco, (endereco) => endereco.clieCliId, {
    cascade: true,
  })
  enderecos: Endereco[];

  constructor(clienteDto: CreateClienteDto) {
    Object.assign(this, clienteDto);
  }
}
