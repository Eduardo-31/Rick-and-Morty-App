import React from 'react'
import useResidents from '../hooks/useResidents'

const CardResidentInfo = ({resident}) => {


  const residents = useResidents(resident)


  return (
    <div className='card-residents'>
        <img src={residents?.image} alt={`image ${residents?.name}`} />
        <h4> {residents?.name} </h4>
        <span>Status:</span>
        <p> {residents?.status} </p>
        <span>Origen:</span>
        <p> {residents?.origin.name} </p>
        <span>Episodes where appear:</span>
        <p> {residents?.episode.length} </p>
    </div>
  )
}

export default CardResidentInfo