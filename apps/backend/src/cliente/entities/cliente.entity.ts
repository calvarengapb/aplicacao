import { Cliente } from '@apps/core';
import { EntitySchema } from 'typeorm';

export const ClienteSchema = new EntitySchema<Cliente>({
  name: 'Cliente',
  target: Cliente,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    nome: {
      type: String,
      length: 100,
    },
    fantasia: {
      type: String,
      length: 100,
    },
    telefone: {
      type: String,
      length: 14,
    },
    tipoJuridico: {
      type: String,
      length: 10,
    },
    cnpjCpf: {
      type: String,
      length: 18,
    },
    inscricaoEstadual: {
      type: Number,
    },
  },
  relations: {
    enderecos: {
      type: 'one-to-many',
      target: 'Endereco',
    },
  },
});
