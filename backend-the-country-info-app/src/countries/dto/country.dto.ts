import { IsString, IsISO31661Alpha2 } from 'class-validator';

export class CountryDto {
  @IsISO31661Alpha2()
  countryCode: string;

  @IsString()
  name: string;

  constructor(countryCode: string, name: string) {
    this.countryCode = countryCode;
    this.name = name;
  }
}
