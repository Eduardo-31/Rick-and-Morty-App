import axios from "axios"
import { useEffect, useState } from 'react'

const useResidents = (x) => {


    const [residents, setResidents] = useState()

    useEffect(() => {
      
      const URL = x
        axios.get(URL)
          .then(res => setResidents(res.data))
          .catch(err => console.log(err))

    }, [])
 

  return  residents
}

export default useResidents