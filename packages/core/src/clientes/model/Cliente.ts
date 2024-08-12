import { Endereco } from "./Endereco"
import { TipoJuridico } from "./enums/tipoJuridico"

export class Cliente{
    id: number
    nome: string
    fantasia: string
    telefone: string
    tipoJuridico: TipoJuridico
    cnpjCpf: string
    inscricaoEstadual: number
    enderecos: Endereco[]
}