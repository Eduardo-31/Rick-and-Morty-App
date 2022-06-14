import './App.css'
import useLocation from './hooks/useLocation'
import CardLocation from './components/CardLocation'
import CardResidentInfo from './components/CardResidentInfo'
import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'

function App() {
  
  const {location, searchLocation} = useLocation()

  return (

    <div className="App">
       
    
      <header>
        <div className='title'>
          <h1>Rick and Morty</h1>
        </div>
        <form onSubmit={searchLocation}>
          <input name='name' type="text" placeholder='type a location id' autoComplete='off' />
          <button>Search</button>
        </form>
        {!location?
          <Loading /> :
        <CardLocation 
          location={location} />}
      </header>
   
    
         <div className='container-residents'>

        {!location?
          <Loading /> :
          location?.residents.map(resident => (
            <CardResidentInfo 
              resident={resident}
              key={resident}
            />
            ))
        }

      </div>

   
       
      
    </div>
  )
}

export default App
