import axios from "axios"
import { useEffect, useState } from "react"



const useLocation = () => {

    const [location, setLocation] = useState()

    const [search, setSearch] = useState()
    const [loader, setLoader] = useState(true)
    
    const searchLocation = e => {
      e.preventDefault()
      setSearch(e.target.name.value)
    }
    
    useEffect(() => {
      
      if(search) {
        
       const API_URL = `https://rickandmortyapi.com/api/location/${search}`
       axios.get(API_URL)
       .then(res => {setLocation(res.data)
          setLoader(false)
      })
       .catch(err => (
        !alert(console.log(err) +
        ', Remember to put an id from 1 to 128')
       )
      )

      } else {
        const random = Math.ceil(Math.random() * 126)
        const API_URLL = `https://rickandmortyapi.com/api/location/${random}`
        axios.get(API_URLL)
        .then(res => {setLocation(res.data)
                setLoader(false)
        })
       .catch(err => console.log(err))
      }
      
    }, [search])
    
    console.log('despues',search)
    console.log('despues',location)


  return  {location, searchLocation, loader}
  
}

export default useLocation