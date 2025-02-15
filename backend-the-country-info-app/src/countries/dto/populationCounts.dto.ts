import { IsNumber } from "class-validator";

export class PopulationCountsDto {
  @IsNumber()
  year: number;

  @IsNumber()
  value: number;

  constructor(year: number, value: number) {
    this.year = year;
    this.value = value;
  }
}
