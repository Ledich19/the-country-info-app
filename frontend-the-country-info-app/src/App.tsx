import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import CountryInfo from './pages/CountryInfo'


function App() {

  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/:countryCode" element={<CountryInfo />} />
    </Routes>
  )
}

export default App
