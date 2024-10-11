import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsPostalCode,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateEnderecoDto {
  @ApiProperty({
    description: 'Código do Cliente',
    format: '99999',
    required: false,
  })
  @IsOptional()
  @IsPositive({
    message: 'Informe um Código de cliente válido.',
  })
  @IsInt({
    message: 'Informe um Código de cliente válido.',
  })
  clieCliId: number;

  @ApiProperty({
    description: 'CEP do logradouro',
    format: '99999-999',
    example: '58993-000',
  })
  @IsPostalCode('BR', {
    message: 'Informe um CEP válido.',
  })
  clieCep: string;

  @ApiProperty({
    description: 'Logradouro do endereço',
    example: ' RUA CAPITAO SILVA',
    minLength: 3,
    maxLength: 120,
  })
  @IsNotEmpty({ message: 'Preencha o Logradouro' })
  @Length(3, 120, {
    message: 'Logradouro deve ter entre $constraint1 e $constraint2 caracteres',
  })
  clieLogradouro: string;

  @ApiProperty({
    description: 'Numero do estabelecimento',
    example: '000 ou S/N',
    minLength: 3,
    maxLength: 10,
  })
  @IsNotEmpty({ message: 'Preencha o Número do estabelecimento' })
  @Length(3, 10, {
    message: 'Número deve ter entre $constraint1 e $constraint2 caracteres',
  })
  clieNumero: string;

  @ApiProperty({
    description: 'Bairro do endereço',
    example: 'CENTRO',
    minLength: 3,
    maxLength: 120,
  })
  @IsNotEmpty({ message: 'Preencha o Bairro' })
  @Length(3, 120, {
    message: 'Bairro deve ter entre $constraint1 e $constraint2 caracteres',
  })
  clieBairro: string;

  @ApiProperty({
    description: 'Cidade',
    example: 'SENADOR CANEDO',
    minLength: 3,
    maxLength: 120,
  })
  @IsNotEmpty({ message: 'Preencha Cidade' })
  @Length(3, 120, {
    message: 'Cidade deve ter entre $constraint1 e $constraint2 caracteres',
  })
  clieCidade: string;

  @ApiProperty({
    description: 'UF do estado',
    example: 'GO',
  })
  @IsNotEmpty({ message: 'Preencha a UF' })
  @Length(2, 2, {
    message: 'UF deve ter apenas $constraint1 caracteres',
  })
  clieUF: string;

  @ApiProperty({
    description: 'Ponto de Referencia para localização do endereço',
    example: 'PROXIMO A PRACA DO CENTRO',
    minLength: 3,
    maxLength: 120,
    required: false,
  })
  @IsOptional()
  @MaxLength(120, {
    message:
      'O ponto de referencia deve conter no maximo $constraint1 caracteres.',
  })
  clieReferencia: string;
}
