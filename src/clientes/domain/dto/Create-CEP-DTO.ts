import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
export class CreateCepDto {
  @IsNotEmpty()
  @IsString()
  cep: string;

  @IsNumber()
  @IsOptional()
  codIbge?: number;

  @IsString()
  @IsOptional()
  cidade?: string;

  constructor(pCep: string) {
    this.cep = pCep;
  }
}
