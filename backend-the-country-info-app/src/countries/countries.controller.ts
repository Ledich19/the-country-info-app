import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller()
export class CountriesController {
  constructor(private readonly appService: CountriesService) {}

  @Get('countries')
  getCountries() {
    return this.appService.getCountries();
  }

  @Get('countries/:countryCode')
  getCountryInfo(@Param('countryCode') countryCode: string) {
    return this.appService.getCountryInfo(countryCode);
  }
}
