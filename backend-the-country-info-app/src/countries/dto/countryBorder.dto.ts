import {
  IsString,
  IsArray,
  ValidateNested,
  IsISO31661Alpha2,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CountryBorderDto {
  @IsString()
  countryName: string;

  @IsString()
  officialName: string;

  @IsISO31661Alpha2()
  countryCode: string;

  @IsString()
  region: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CountryBorderDto)
  borders: CountryBorderDto[] | null = null;

  constructor(
    countryName: string,
    officialName: string,
    countryCode: string,
    region: string,
    borders: CountryBorderDto[] | null = null
  ) {
    this.countryName = countryName;
    this.officialName = officialName;
    this.countryCode = countryCode;
    this.region = region;
    this.borders = borders;
  }
}
