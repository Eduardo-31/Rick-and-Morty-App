import axios from "axios"
import { useEffect, useState } from 'react'

const useResidents = (url) => {


    const [residents, setResidents] = useState()

    useEffect(() => {
        axios.get(url)
          .then(res => setResidents(res.data))
          .catch(err => console.log(err))
    }, [])
 

  return  residents
}

export default useResidents