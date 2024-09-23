import {
  IsNotEmpty,
  IsString,
  Length,
  IsPhoneNumber,
  IsEnum,
  IsInt,
} from 'class-validator';
import { IsCPFOrCNPJ } from 'validator-br-nestjs';
import MENSAGEM_TIPO_DE_DADO_INVALIDO from 'src/clientes/decorators/Constants';
import { ApiProperty } from '@nestjs/swagger';

export enum TipoJuridico {
  FISICA = 'F',
  JURIDICA = 'J',
}

export class CreateClienteDto {
  @ApiProperty({
    description: 'Empresa a qual o cadastro pertence',
  })
  @IsNotEmpty({ message: 'Informe uma empresa válida' })
  @IsInt({ message: MENSAGEM_TIPO_DE_DADO_INVALIDO })
  empresa: number;

  @ApiProperty({
    description: 'Razão Social (nome no documento) do Cliente',
  })
  @IsNotEmpty({ message: 'Razão Social nao pode ser vazio.' })
  @IsString({ message: MENSAGEM_TIPO_DE_DADO_INVALIDO })
  @Length(5, 120, {
    message:
      'Razão Social deve ter entre $constraint1 e $constraint2 caracteres.',
  })
  razaoSocial: string;

  @ApiProperty({
    description: 'Nome de Fantasia (identificação do ponto) do cliente',
  })
  @IsNotEmpty({ message: 'Nome de Fantasia nao pode ser Vazio' })
  @IsString({ message: MENSAGEM_TIPO_DE_DADO_INVALIDO })
  @Length(5, 120, {
    message:
      'Nome de Fantasia deve ter entre $constraint1 e $constraint2 caracteres.',
  })
  nomeFantasia: string;

  @ApiProperty({
    description: 'Informe o telefone no formato (99) 99999-9999',
  })
  @IsPhoneNumber('BR')
  telefone: string;

  @ApiProperty({
    description: 'Documento do cadastro: CPF ou CNPJ',
  })
  @IsCPFOrCNPJ({ message: 'Documento Inválido!' })
  @IsNotEmpty({ message: 'Informe um número de documento válido.' })
  cpfCnpj: string;

  @IsString({ message: MENSAGEM_TIPO_DE_DADO_INVALIDO })
  @ApiProperty({
    description: 'Inscrição Estadual',
    required: false,
  })
  inscricaoEstadual?: string;

  @IsEnum(TipoJuridico, { message: 'Informe um Tipo Jurídico válido..' })
  @IsNotEmpty({ message: 'Selecione o Tipo Jurídico.' })
  @ApiProperty({
    description: 'Tipo juridico do cadastro (F - Física, J - Jurídica)',
  })
  tipoJuridico: string;
}
