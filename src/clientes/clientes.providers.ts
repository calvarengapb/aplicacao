import { DataSource } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { Endereco } from './entities/endereco.entity';

export const clienteProviders = [
  {
    provide: 'CLIENTE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Cliente),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'ENDERECO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Endereco),
    inject: ['DATA_SOURCE'],
  },
];
