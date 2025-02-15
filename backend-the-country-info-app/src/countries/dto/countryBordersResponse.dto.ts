import {
  IsString,
  IsISO31661Alpha2,
  IsArray,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CountryBorderDto } from './countryBorder.dto';

export class CountryBordersDataDto {
  @IsString()
  commonName: string;

  @IsString()
  officialName: string;

  @IsISO31661Alpha2()
  countryCode: string;

  @IsString()
  region: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CountryBorderDto)
  @IsOptional()
  borders?: CountryBorderDto[];

  constructor(
    countryName: string,
    officialName: string,
    countryCode: string,
    region: string,
    borders: CountryBorderDto[]
  ) {
    this.commonName = countryName;
    this.officialName = officialName;
    this.countryCode = countryCode;
    this.region = region;
    this.borders = borders;
  }
}
