import { Cep } from "../../shared/model/Cep";
import { Cliente } from "./Cliente";
import { TipoEndereco } from './enums/tipoEndereco';

export class Endereco{
    tipoDeEndereco: TipoEndereco
    cliente: Cliente
    cep: Cep
    logradouro: string
    numero: string
    complemento?: string
    bairro: string
    contatoDoRecebedor?: string
    observacao?: string
}