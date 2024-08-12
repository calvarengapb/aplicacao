import { Cep } from '@apps/core';
import { EntitySchema } from 'typeorm';

export const CepSchema = new EntitySchema<Cep>({
  name: 'Cep',
  target: Cep,
  columns: {
    cep: {
      primary: true,
      type: String,
      length: 10,
    },
    codMunicipioIbge: {
      type: Number,
      nullable: false,
    },
    cidade: {
      type: String,
      nullable: false,
    },
  },
});
