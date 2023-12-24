import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateProfileDto {

  @IsString()
  nome: string;
  @IsString()
  telefone: string;

  @IsString()
  email: string;

  @IsString()
  renda: string;

  @IsString()
  pretencao: string;

  @IsBoolean()
  experiencia: boolean;

  @IsString()
  banco: string;

}


