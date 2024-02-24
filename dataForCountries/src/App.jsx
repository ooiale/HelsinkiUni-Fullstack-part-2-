import { useState, useEffect } from 'react'

import countryService from './services/countryService'


import CountryList from './components/CountryList'



function App() {
  const [countryFilter, setCountryFilter] = useState('')
  const [countryList, setCountryList] = useState([])

  //const api_key = import.meta.env.VITE_SOME_KEY
  

  const filterData = () => {
    const filteredData = countryList.filter(
      (country) => {
        return (
          country.name.common.toLowerCase().indexOf(countryFilter.toLowerCase()) === 0
        )
      }
    )
    return filteredData
  }


  useEffect( () => {
    countryService.getAll()
      .then( (initialData) => {
        setCountryList(initialData)        
      })
      .catch( () => console.log('failed to retrieve the data'))
  }, [])



  const handleChange = (event) => {
    setCountryFilter(event.target.value)
  }

  const countriesToShow = filterData()


  



  return (
    <div>
      <form>
        find countries 
        <input 
          value={countryFilter}
          onChange={handleChange}/>
      </form>

    <div>
      {countryFilter && <CountryList 
                          countriesToShow = {countriesToShow} 
                          setCountryFilter={setCountryFilter}/>}
    </div>


    

    </div>
  )
}

export default App
