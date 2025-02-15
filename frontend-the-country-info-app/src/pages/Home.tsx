import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getCountries } from "../services/countries.service"
import { ICountry } from "../interfaces/country"
import CountriesList from "../components/CountriesList"

function Home() {
  const [countries, setCountries] = useState<ICountry[]>([])

  useEffect(() => {
    getCountries().then((countries) => setCountries(countries))
  }, [])

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Countries
      </Typography>

      <CountriesList countries={countries} />
    </Box>
  )
}

export default Home
