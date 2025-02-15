import { Box, Typography, Avatar } from "@mui/material"
import CountriesList from "../components/CountriesList"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getCountry } from "../services/countries.service";
import { ICountryInfo } from "../interfaces/countryInfo";
import CustomTooltip from "../components/CustomTooltip";

function CountryInfo() {
  const { countryCode } = useParams();
  const [country, setCountry] = useState<ICountryInfo | null>(null)

  useEffect(() => {
    if (!countryCode) return;
    getCountry(countryCode).then((countries) => setCountry(countries))
  }, [countryCode])

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h2" component="div">
          {country?.commonName}
        </Typography>
        <Avatar
          variant="square"
          alt={`flag ${country?.commonName}`}
          src={country?.flag}
          sx={{ width: 60, height: 40 }}
        />
      </Box>

      <CountriesList countries={country?.borders.map((country) => ({
        "countryCode": country.countryCode,
        "name": country?.commonName
      })) || []} />

      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Countries
      </Typography>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={country?.population}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis dataKey="value" />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>

    </Box>
  )
}

export default CountryInfo
