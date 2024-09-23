/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'gener' })
export default class TipoEndereco {
  @Column({ name: 'gen_tgen_id', default: 10 })
  @PrimaryColumn()
  tgenId: number;
  @Column({ name: 'gen_emp_id' })
  @PrimaryColumn()
  empId: number; //tipo Empresa nao criado nesse protótipo
  @Column({ name: 'gen_id' })
  @PrimaryColumn()
  id: number;
  @Column({ name: 'gen_descricao' })
  descricao: string;
  @Column({name: 'gen_numerico_1',nullable: true })
  obrigatorio: boolean;

  constructor(tipoEndereco: Partial<TipoEndereco>){
    Object.assign(this, tipoEndereco);
  }
}
