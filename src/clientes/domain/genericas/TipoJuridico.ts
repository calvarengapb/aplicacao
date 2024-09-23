import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { Cliente } from '../cliente';

@Entity({ name: 'gener' })
export class TipoJuridico {
  @Column({ name: 'gen_tgen_id' })
  @PrimaryColumn()
  tgenId: number;

  @Column({ name: 'gen_emp_id' })
  @PrimaryColumn()
  empId: number;

  @Column({ name: 'gen_id' })
  @PrimaryColumn()
  id: number;

  @Column({ name: 'gen_descricao' })
  descricao: string;

  @OneToOne(() => Cliente, (cliente) => cliente.tipoJuridico)
  cliente: Cliente;
}
export default TipoJuridico;
