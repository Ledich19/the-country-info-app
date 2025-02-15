import {
  IsString,
  IsISO31661Alpha3,
  IsArray,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { PopulationCountsDto } from "./populationCounts.dto";

export class CountryPopulationItemDto {
  @IsString()
  country: string;

  @IsString()
  code: string;

  @IsISO31661Alpha3()
  iso3: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PopulationCountsDto)
  populationCounts: PopulationCountsDto[];

  constructor(
    country: string,
    code: string,
    iso3: string,
    populationCounts: PopulationCountsDto[]
  ) {
    this.country = country;
    this.code = code;
    this.iso3 = iso3;
    this.populationCounts = populationCounts;
  }
}
