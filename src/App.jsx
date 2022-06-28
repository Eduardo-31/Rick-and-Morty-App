import './App.css'
import useLocation from './hooks/useLocation'
import CardLocation from './components/CardLocation'
import CardResidentInfo from './components/CardResidentInfo'
import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Pagination from './components/Pagination'

function App() {
  
  const [search, setSearch] = useState()
  
  const {location} = useLocation(search)

  // status for pagination
  const [currentPages, setCurrentPages] = useState(1)

  const searchLocation = e => {
    e.preventDefault()
    setSearch(e.target.name.value)
    Form.reset()
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
       
    
      <header>
        <div className='title'>
          <h1>Rick and Morty</h1>
        </div>
        <form onSubmit={searchLocation} id="Form" >
          <input name='name' type="text" placeholder='type a location id' autoComplete='off' />
          <button>Search</button>
        </form>
        {!location?
          <Loading /> :
        <CardLocation 
          location={location} />}
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

        {!location?
          <Loading /> :
          arrayResidents?.map(resident => (
            <CardResidentInfo 
              resident={resident}
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

    </div>
  )
}

export default App
