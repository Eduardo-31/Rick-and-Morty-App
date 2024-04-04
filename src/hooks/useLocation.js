import axios from "axios"
import { useEffect, useState } from "react"



const useLocation = (search) => {

    const [location, setLocation] = useState()
    const [locationError, setLocationError] = useState()
    
    
    useEffect(() => {
      
      if(search) {
        
       const API_URL = `https://rickandmortyapi.com/api/location/?name=${search}`
       
       axios.get(API_URL)
        .then(res => setLocation(res.data.results[0]))
        .catch(err => {
          if(err.response.data.error){
            setLocationError(true)
            setTimeout(() => {
              setLocationError(false)
            }, 4000);
          }
        })
      
      } else {
        const random = Math.ceil(Math.random() * 126)
        const API_URLL = `https://rickandmortyapi.com/api/location/${random}`
        axios.get(API_URLL)
        .then(res => setLocation(res.data))
        .catch(err => console.log(err))
      }
      
    }, [search])
    
 


  return  {location, locationError}
  
}

export default useLocation