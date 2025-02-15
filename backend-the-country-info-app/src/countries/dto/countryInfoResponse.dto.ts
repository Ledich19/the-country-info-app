import {
  IsString,
  IsArray,
  ValidateNested,
  IsISO31661Alpha2,
} from "class-validator";
import { Type } from "class-transformer";
import { CountryBorderDto } from "./countryBorder.dto";
import { PopulationCountsDto } from "./populationCounts.dto";

export class CountryInfoResponseDto {
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
  borders: CountryBorderDto[];

  @IsString()
  flag: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PopulationCountsDto)
  population: PopulationCountsDto[];

  constructor(
    commonName: string,
    officialName: string,
    countryCode: string,
    region: string,
    borders: CountryBorderDto[],
    flag: string,
    population: PopulationCountsDto[]
  ) {
    this.commonName = commonName;
    this.officialName = officialName;
    this.countryCode = countryCode;
    this.region = region;
    this.borders = borders;
    this.flag = flag;
    this.population = population;
  }
}
