import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cliente } from './cliente.entity';

@Entity({ name: 'CLIENTE_E' })
export class Endereco {
  @PrimaryGeneratedColumn({ name: 'CLIE_ID' })
  cliEndId: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.enderecos, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'CLIE_CLI_ID' })
  clieCliId: Cliente;

  @Column({ name: 'CLIE_CEP', length: 9 })
  clieCep: string;

  @Column({ name: 'CLIE_LOGRADOURO', length: 120 })
  clieLogradouro: string;

  @Column({ name: 'CLIE_NUMERO', length: 10 })
  clieNumero: string;

  @Column({ name: 'CLIE_BAIRRO', length: 120 })
  clieBairro: string;

  @Column({ name: 'CLIE_CIDADE', length: 120 })
  clieCidade: string;

  @Column({ name: 'CLIE_UF', length: 2 })
  clieUF: string;

  @Column({ name: 'CLIE_REFERENCIA', length: 120, nullable: true })
  clieReferencia?: string;
}
