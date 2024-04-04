import React from 'react'
import useResidents from '../hooks/useResidents'
import Loading from './Loading'

const CardResidentInfo = ({url}) => {


  const resident = useResidents(url)

  if(resident){
    
    return (
      
      <div className='card-residents'>
          <div className='card-residents__img'>
            <img src={resident?.image} alt={`image ${resident?.name}`} loading='lazy' />
            <div className='card-residents__status'>
              <div className={`card-residents__status__circle card-residents__status__circle-${resident?.status.toLowerCase()}`}></div>
              <span className={`card-residents__status__name card-residents__status__name-${resident?.status.toLowerCase()}`}> {resident.status} </span>
            </div>
          </div>
          <h4> {resident?.name} </h4>
          <span className='card-residents__label'>Origen:</span>
          <p> {resident?.origin.name} </p>
          <span className='card-residents__label'>Episodes where appear:</span>
          <p> {resident?.episode.length} </p>
      </div>
    )
  }
}

export default CardResidentInfo