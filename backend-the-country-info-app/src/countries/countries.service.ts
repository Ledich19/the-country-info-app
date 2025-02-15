import { Injectable } from "@nestjs/common";
import { CountryPopulationResponseDto } from "./dto/countryPopulationResponse.dto";
import { CountriesFlagsResponseDto } from "./dto/countriesFlagsResponse.dto";
import { CountryPopulationItemDto } from "./dto/countryPopulationItem.dto";
import { CountryInfoResponseDto } from "./dto/countryInfoResponse.dto";
import { CountryDto } from "./dto/country.dto";
import { CountryBordersDataDto } from "./dto/countryBordersResponse.dto";
import { CountryFlagDto } from "./dto/countryFlag.dto";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class CountriesService {
  constructor(private readonly configService: ConfigService) {}
  private readonly BASE_NAGER_URL: string =
    this.configService.get("BASE_NAGER_URL") ?? "";
  private readonly BASE_COUNTRIESNOW_URL: string =
    this.configService.get("BASE_COUNTRIESNOW_URL") ?? "";

  getData(): { message: string } {
    return { message: "Hello API" };
  }

  async getCountries(): Promise<CountryDto[]> {
    try {
      const response = await fetch(`${this.BASE_NAGER_URL}/AvailableCountries`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return (await response.json()) as CountryDto[];
    } catch (error) {
      console.error(error);
      throw new Error("Failed to load countries");
    }
  }

  async getCountryBorders(
    countryCodeIso2: string
  ): Promise<CountryBordersDataDto> {
    try {
      const url = `${this.BASE_NAGER_URL}/CountryInfo/${countryCodeIso2}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = (await response.json()) as CountryBordersDataDto;

      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to load country borders");
    }
  }

  async getCountriesPopulation(
    countryCodeIso3: string
  ): Promise<CountryPopulationItemDto | null> {
    try {
      const response = await fetch(
        `${this.BASE_COUNTRIESNOW_URL}/countries/population`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { error, data, msg } =
        (await response.json()) as CountryPopulationResponseDto;

      if (error) {
        throw new Error(msg);
      }

      const country =
        data.find((country) => country.iso3 === countryCodeIso3) || null;
      return country;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to load country population");
    }
  }

  async getCountriesFlags(
    countryCodeIso2: string
  ): Promise<CountryFlagDto | null> {
    try {
      const response = await fetch(
        `${this.BASE_COUNTRIESNOW_URL}/countries/flag/images`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const { error, data, msg }: CountriesFlagsResponseDto =
        (await response.json()) as CountriesFlagsResponseDto;

      if (error) {
        throw new Error(msg);
      }

      const flag = data.find((flag) => flag.iso2 === countryCodeIso2);
      if (!flag) {
        throw new Error("No flag found for this country");
      }

      return flag;
    } catch (error) {
      console.error("Error fetching country flag:", error);
      throw new Error("Failed to load country flag");
    }
  }

  async getCountryInfo(countryCode: string): Promise<CountryInfoResponseDto> {
    const countryData = await Promise.all([
      this.getCountryBorders(countryCode),
      this.getCountriesFlags(countryCode),
    ]);

    const countryPopulation = await this.getCountriesPopulation(
      countryData[1]?.iso3 ?? ""
    );

    return {
      commonName: countryData[0].commonName,
      officialName: countryData[0].officialName,
      countryCode: countryData[0].countryCode,
      region: countryData[0].region,
      borders: countryData[0].borders || [],
      flag: countryData[1]?.flag ?? "",
      population: countryPopulation?.populationCounts || [],
    };
  }
}
