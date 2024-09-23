import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Cep } from './Cep';
import { Cliente } from './cliente';
import TipoEndereco from './genericas/TipoEndereco';
import { CreateEnderecoDto } from './dto/Create-Endereco-DTO';

@Entity()
@Index(['tipoDeEndereco', 'cliente'], { unique: true })
export class Endereco {
  @Column({ name: 'clie_id' })
  @PrimaryGeneratedColumn()
  idEndereco: number;

  @OneToOne(() => TipoEndereco)
  @JoinColumn([
    {
      name: 'clie_gen_tgen_id_tipo_endereco',
      referencedColumnName: 'tgenId',
    },
    {
      name: 'clie_gen_emp_id_tipo_endereco',
      referencedColumnName: 'empId',
    },
    {
      name: 'clie_gen_id_tipo_endereco',
      referencedColumnName: 'id',
    },
  ])
  tipoDeEndereco: TipoEndereco;

  @ManyToOne(() => Cliente, (cliente) => cliente.id)
  @JoinColumn([
    { name: 'clie_cli_emp_id', referencedColumnName: 'empresa' },
    { name: 'clie_cli_id', referencedColumnName: 'id' },
  ])
  cliente: Cliente;

  @OneToMany(() => Cep, (cep) => cep.cep)
  cep: Cep;

  @Column({ name: 'clie_logradouro', length: 120 })
  logradouro: string;

  @Column({ name: 'clie_numero', length: 10 })
  numero: string;

  @Column({ name: 'clie_complemento', length: 100, nullable: true })
  complemento?: string;

  @Column({ name: 'clie_bairro', length: 100 })
  bairro: string;

  @Column({ name: 'clie_contato_receb', length: 60, nullable: true })
  contatoDoRecebedor?: string;

  @Column({ name: 'clie_observacao', length: 80, nullable: true })
  observacao?: string;

  @Column({ name: 'clie_end_lati', length: 12 })
  latitude?: string;

  @Column({ name: 'clie_end_long', length: 12, nullable: true })
  longitude?: string;

  @Column({ name: 'clie_foto_estabelecim', length: 120, nullable: true })
  fotoEstabelecimento?: string;

  @CreateDateColumn()
  dataCadastro: Date;

  @UpdateDateColumn()
  dataAtualizacao: Date;

  @Column({ name: 'clie_usr_cad', length: 10 })
  usuarioCadastro: string; // tipo usuario nao criado nesse prototipo

  constructor(endereco: Partial<CreateEnderecoDto>) {
    Object.assign(this, endereco);
  }
}
