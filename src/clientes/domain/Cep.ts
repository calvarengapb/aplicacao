import { Column, Entity, PrimaryColumn } from 'typeorm';
import { CreateCepDto } from './dto/Create-CEP-DTO';

@Entity()
export class Cep {
  @PrimaryColumn()
  cep: string;

  @Column({ nullable: true })
  codMunicipioIbge: number;

  @Column({ length: 80, nullable: true })
  cidade: string;

  constructor(cep: Partial<CreateCepDto>) {
    Object.assign(this, cep);
  }
}
