import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsPhoneNumber,
  Length,
  ValidateNested,
} from 'class-validator';
import { CreateEnderecoDto } from './create-endereco.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsCPFOrCNPJ } from 'validator-br-nestjs';
import { Type } from 'class-transformer';

export class CreateClienteDto {
  @ApiProperty({
    description: 'Razao social do cliente',
    example: 'JOSE ALVES DA SILVA',
    minLength: 3,
    maxLength: 120,
  })
  @IsNotEmpty({ message: 'Preencha a Razão Social' })
  @Length(3, 120, {
    message:
      'Razão Social deve ter entre $constraint1 e $constraint2 caracteres',
  })
  cliRazaoSocial: string;

  @ApiProperty({
    description: 'Nome de fantasia do cliente',
    example: 'BAR DO ZE',
    minLength: 3,
    maxLength: 120,
  })
  @Length(3, 120, {
    message:
      'Nome de fantasia deve ter entre $constraint1 e $constraint2 caracteres',
  })
  cliNomeFantasia: string;

  @ApiProperty({
    description: 'Documento do cliente (CPF ou CNPJ)',
    example: '99.999.999/9999-99',
  })
  @IsNotEmpty({ message: 'Preencha o Numero do documento' })
  @IsCPFOrCNPJ()
  cliDocumento: string;

  @ApiProperty({
    description: 'Numero de telefone Celular do cliente.',
    example: '(12) 98765-4321',
    format: '(99)#99999-9999',
  })
  @IsPhoneNumber('BR', {
    message: 'Preencha um telefone válido.',
  })
  cliTelefone: string;

  @ApiProperty({
    description: 'Lista de endereços do cliente.',
    type: [CreateEnderecoDto],
  })
  @ArrayNotEmpty({
    message: 'O Cliente deve ter pelo menos 1 endereço cadastrado',
  })
  @ValidateNested({ each: true })
  @Type(() => CreateEnderecoDto)
  enderecos: CreateEnderecoDto[];
}
