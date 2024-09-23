import {
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  MinLength,
} from 'class-validator';
import MENSAGEM_TIPO_DE_DADO_INVALIDO from 'src/clientes/decorators/Constants';

export class CreateEnderecoDto {
  @IsNumber()
  @IsNotEmpty({ message: 'Informe o Tipo do endereço' })
  tipoDeEndereco: number;

  @IsNotEmpty({ message: 'Informe um CEP Válido.' })
  cep: string;

  @IsString({ message: MENSAGEM_TIPO_DE_DADO_INVALIDO })
  @IsNotEmpty({ message: 'Informe o Endereço.' })
  logradouro: string;

  @MinLength(3, { message: 'Numero não pode conter menos de 3 caracteres.' })
  @IsString({
    message: MENSAGEM_TIPO_DE_DADO_INVALIDO,
  })
  @IsNotEmpty({ message: 'Informe o Número.' })
  numero: string;

  @IsOptional()
  @IsString({ message: MENSAGEM_TIPO_DE_DADO_INVALIDO })
  complemento?: string;

  @IsString({ message: MENSAGEM_TIPO_DE_DADO_INVALIDO })
  @IsNotEmpty({ message: 'Informe o Bairro' })
  bairro: string;

  @IsOptional()
  @IsString({ message: MENSAGEM_TIPO_DE_DADO_INVALIDO })
  contatoRecebedor?: string;

  @IsOptional()
  @IsString({ message: MENSAGEM_TIPO_DE_DADO_INVALIDO })
  observacao?: string;

  @IsOptional()
  @IsLatitude({ message: MENSAGEM_TIPO_DE_DADO_INVALIDO })
  latitude?: string;

  @IsOptional()
  @IsLongitude({ message: MENSAGEM_TIPO_DE_DADO_INVALIDO })
  longitude?: string;

  @IsOptional()
  @IsString({ message: MENSAGEM_TIPO_DE_DADO_INVALIDO })
  fotoEstabelecimento?: string;
}
