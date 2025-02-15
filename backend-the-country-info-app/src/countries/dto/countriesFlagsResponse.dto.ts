import { IsBoolean, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CountryFlagDto } from './countryFlag.dto';

export class CountriesFlagsResponseDto {
  @IsBoolean()
  error: boolean;

  @IsString()
  msg: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CountryFlagDto)
  data: CountryFlagDto[];

  constructor(error: boolean, msg: string, data: CountryFlagDto[]) {
    this.error = error;
    this.msg = msg;
    this.data = data;
  }
}
