import axios from "axios"
import { useEffect, useState } from "react"



const useLocation = (search) => {

    const [location, setLocation] = useState()
    
    
    useEffect(() => {
      
      if(search) {
        
       const API_URL = `https://rickandmortyapi.com/api/location/${search}`
       axios.get(API_URL)
       .then(res => {setLocation(res.data)
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
        })
       .catch(err => console.log(err))
      }
      
    }, [search])
    
 


  return  {location}
  
}

export default useLocation