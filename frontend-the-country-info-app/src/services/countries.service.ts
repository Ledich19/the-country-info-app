import axios from "axios";
import { ICountryInfo } from "../interfaces/countryInfo";
import { ICountry } from "../interfaces/country";

export const getCountries = async (): Promise<ICountry[]> => {
  try {
    const response = await axios.get<ICountry[]>(
      "https://date.nager.at/api/v3/AvailableCountries"
    );
    console.log("Get countries", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching countries", error);
    return [];
  }
};

export const getCountry = async (
  countryCode: string
): Promise<ICountryInfo | null> => {
  try {
    const response = await axios.get<ICountryInfo>(
      `http://localhost:3000/api/countries/${countryCode}`
    );
    console.log("Get country", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching countries", error);
    return null;
  }
};
