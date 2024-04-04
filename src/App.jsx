import './App.css'
import useLocation from './hooks/useLocation'
import CardLocation from './components/CardLocation'
import CardResidentInfo from './components/CardResidentInfo'
import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Pagination from './components/Pagination'
import iconSearchNotFound from '../src/img/Rick-SearchNotFound .gif'
function App() {
  
  const [search, setSearch] = useState()
  
  const {location, locationError} = useLocation(search)

  // status for pagination
  const [currentPages, setCurrentPages] = useState(1)

  const searchLocation = (e) => {
    
    e.preventDefault()
    const value = e.target.name.value
    if(value){
      console.log('first')
      setSearch(value.toLowerCase())
      Form.reset()
    }
  }

  // pagination logic
  let arrayResidents = []
  const residentsPerPage = 8
  if(location?.residents.length < residentsPerPage ) {
    arrayResidents = [...location?.residents]
  } else {
    const lastResident = currentPages * residentsPerPage
    arrayResidents = location?.residents.slice( lastResident - residentsPerPage, lastResident)
  }
  // 1 =27 3 =101
  let arrayPages = []
  let quantityPages = Math.ceil(location?.residents.length / residentsPerPage)
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPages / pagesPerBlock)
  if(currentBlock * pagesPerBlock >= quantityPages) {
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages ; i++) {
      arrayPages.push(i)
    }
  } else {
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++ ){
      arrayPages.push(i)
    }
  }

  return (

    <div className="App">
      {
        locationError && 
          <div className='card-search-error'>
            <div className='card-search-error__content'>
              <a><i class="fa-solid fa-exclamation"></i></a>
              <p className='card-search-error__text'>Search not found</p>
            </div>
            <div className='card-search-error__img'>
              <img src={iconSearchNotFound} alt="" />
            </div>
          </div>
      }
    
      <header>

        <div className='title'>
          <h1>Rick and Morty</h1>
        </div>
        <form className='header-search-form' onSubmit={searchLocation} id="Form" >
          <input name='name' type="text" placeholder='origin or location' autoComplete='off' />
          <button>Search</button>
        </form>

        <CardLocation 
          location={location}
        />

      </header>
   
      { 
        quantityPages > 1 &&
       <Pagination
        arrayPages={arrayPages}
        currentPages={currentPages}
        setCurrentPages={setCurrentPages}
        quantityPages={quantityPages}
        />
      }
    
      <div className={ quantityPages <= 1 ? 'container-residents padding-50' : 'container-residents'}>

        { location && 
          arrayResidents?.map(resident => (
            <CardResidentInfo 
              url={resident}
              key={resident}
            />
            ))
        }

      </div>   
      
      { 
        quantityPages > 1 &&
        <Pagination
        arrayPages={arrayPages}
        currentPages={currentPages}
        setCurrentPages={setCurrentPages}
        quantityPages={quantityPages}
        />
      }

      {
        !location && 
        <Loading />
      }

    </div>
  )
}

export default App
