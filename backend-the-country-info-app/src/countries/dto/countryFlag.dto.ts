import {
  IsString,
  IsISO31661Alpha2,
  IsISO31661Alpha3,
  IsUrl,
} from "class-validator";

export class CountryFlagDto {
  @IsString()
  name: string;

  @IsUrl()
  flag: string;

  @IsISO31661Alpha2()
  iso2: string;

  @IsISO31661Alpha3()
  iso3: string;

  constructor(name: string, flag: string, iso2: string, iso3: string) {
    this.name = name;
    this.flag = flag;
    this.iso2 = iso2;
    this.iso3 = iso3;
  }
}
