export interface ICountryInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: null;
  }[];
  flag: string;
  population: {
    year: number;
    value: number;
  }[];
}
