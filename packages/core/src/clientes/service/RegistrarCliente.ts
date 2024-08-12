import CasoDeUso from "../../shared/CasoDeUso";
import { Cliente } from "../model/Cliente";
import RepositorioCliente from "../provider/RepositorioCliente";

export default class RegistrarCliente implements CasoDeUso {

    constructor( private readonly repo: RepositorioCliente ) {}

    async executar(cliente: Cliente): Promise<void> {
        
        if(cliente.nome.length < 3 || cliente.nome === '' ){
            throw new Error("Nome deve conter mais de 3 caracteres!");
        }
        if(cliente.telefone.length < 13){
            throw new Error('Número de telefone Inválido!')
        }
        if(cliente.tipoJuridico.length < 1){
            throw new Error('Tipo Juridico deve ser informado!')
        }
        if(cliente.cnpjCpf.length < 1){
            throw new Error("Campo de documento nao pode ser vazio!");
        }

        this.repo.salvar(cliente)
    }
}