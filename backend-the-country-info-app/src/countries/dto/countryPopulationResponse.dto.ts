import { IsBoolean, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CountryPopulationItemDto } from './countryPopulationItem.dto';

export class CountryPopulationResponseDto {
  @IsBoolean()
  error: boolean;

  @IsString()
  msg: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CountryPopulationItemDto)
  data: CountryPopulationItemDto[];

  constructor(error: boolean, msg: string, data: CountryPopulationItemDto[]) {
    this.error = error;
    this.msg = msg;
    this.data = data;
  }
}
