import { Controller, Get, Param } from "@nestjs/common";
import { CountriesService } from "./countries.service";

@Controller("countries")
export class CountriesController {
  constructor(private readonly appService: CountriesService) {}

  @Get("")
  getCountries() {
    return this.appService.getCountries();
  }

  @Get(":countryCode")
  getCountryInfo(@Param("countryCode") countryCode: string) {
    return this.appService.getCountryInfo(countryCode);
  }
}
