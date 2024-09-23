import { DataSource, EntitySubscriberInterface } from 'typeorm';
import { Cliente } from '../domain/cliente';

export class ClienteSubscribe implements EntitySubscriberInterface<Cliente> {
  constructor(datasource: DataSource) {
    datasource.subscribers.push(this);
  }

  listenTo() {
    return Cliente;
  }

  //implementações para auditoria do cadastro de cliente
}
