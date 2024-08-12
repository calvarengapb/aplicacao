import { Endereco } from '@apps/core';
import { EntitySchema } from 'typeorm';

export const EnderecoShema = new EntitySchema<Endereco>({
  name: 'Endereco',
  tableName: 'cliente_endereco',
  target: Endereco,
  columns: {
    tipoDeEndereco: {
      type: String,
      length: 10,
      primary: true,
    },
    logradouro: {
      type: String,
      length: 140,
    },
    numero: {
      type: String,
      length: 10,
      default: 'S/N',
    },
    complemento: {
      type: String,
      length: 150,
      nullable: true,
    },
    bairro: {
      type: String,
      length: 50,
    },
    contatoDoRecebedor: {
      type: String,
      length: 50,
      nullable: true,
    },
    observacao: {
      type: String,
      length: 50,
      nullable: true,
    },
  },
  relations: {
    cliente: {
      type: 'many-to-one',
      target: 'Cliente',
      inverseSide: 'enderecos',
      primary: true,
    },
    cep: {
      type: 'one-to-one',
      target: 'Cep',
      eager: true,
    },
  },
});
