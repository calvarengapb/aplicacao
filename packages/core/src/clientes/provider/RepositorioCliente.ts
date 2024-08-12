import { Cliente } from "../model/Cliente";

export default interface RepositorioCliente{
    salvar( cliente: Cliente): Promise<Cliente>
    buscarTodos(): Promise<Cliente[]>
    buscarPorId( id: number ): Promise<Cliente>
    buscarPorNome( nome: String ): Promise<Cliente>
}