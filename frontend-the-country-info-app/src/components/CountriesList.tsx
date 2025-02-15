import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import { Link } from "react-router"
import { ICountry } from "../interfaces/country"

type CountriesListProps = {
  readonly countries: ICountry[]
}

function CountriesList({ countries }: CountriesListProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '600px' }}>
        <TableHead>
          <TableRow>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((country) => (
            <TableRow key={country.countryCode} hover>
              <TableCell component="th" scope="row">
                <Link to={`/${country.countryCode}`} style={{ textDecoration: 'none' }}>
                  {country.name}
                </Link>
              </TableCell>
              <TableCell align="right">{country.countryCode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CountriesList
