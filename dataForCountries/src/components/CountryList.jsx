import './countryList.css'
import Weather from './Weather'

const CountryList = ({countriesToShow, setCountryFilter}) => {
    if (countriesToShow.length === 0) {
        return (
            <p>No countries found</p>
        )
    }
    if (countriesToShow.length === 1) {
        const country = countriesToShow[0]
        return (
            <>
                <h1>{country.name.common}</h1>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area} km²</p>
                <h3>Languages:</h3>
                <ul>
                    {Object.entries(country.languages).map((code) => {
                        return (
                            <li key={code[0]}> {code[1]}</li>
                        )
                    })}
                </ul>
                <img className='flag' src={country.flags.png} alt={country.flags.alt}/>
                <Weather city={country.capital}/>
                
            </>
            

        )
    }
    if (countriesToShow.length <= 10) {
        return (
            countriesToShow.map(country => 
            <li key={country.name.common}>
                {country.name.common}

                <button className='show' 
                        onClick={() => setCountryFilter(country.name.common)}> Show 
                        </button>

            </li>)
        )
    }
    return (
        <p>Too many matches, specify another filter</p>
    )
}

export default CountryList