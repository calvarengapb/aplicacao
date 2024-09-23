import { Column, Entity, Index, OneToMany, PrimaryColumn } from 'typeorm';
import { Endereco } from './Endereco';
import { CreateClienteDto } from './dto/Create-Cliente-DTO';

export enum TipoJuridico {
  F = 'Física',
  J = 'Jurídica',
}

@Entity()
@Index(['empresa', 'id'], { unique: true })
export class Cliente {
  @Column({ name: 'cli_emp_id', primaryKeyConstraintName: 'cliente_pk' })
  empresa: number;

  @PrimaryColumn({
    name: 'cli_id',
    primaryKeyConstraintName: 'cliente_pk',
    generated: 'increment',
  })
  id: number;

  @Column({ name: 'cli_razao_social', length: 120 })
  razaoSocial: string;

  @Column({ name: 'cli_fantasia', length: 80 })
  nomeFantasia: string;

  @Column({ name: 'cli_telefone', length: 14 })
  telefone: string;

  @Column({ name: 'cli_tipo_juridico', length: 1 })
  tipoJuridico: TipoJuridico;

  @Column({ name: 'cli_cnpj_cpf', length: 18, unique: true })
  cpfCnpj: string;

  @Column({ name: 'cli_ie', length: 14 })
  inscricaoEstadual?: string;

  @OneToMany(() => Endereco, (endereco) => endereco.cliente)
  enderecos: Endereco[];

  constructor(cliente: Partial<CreateClienteDto>) {
    Object.assign(this, cliente);
  }
}
