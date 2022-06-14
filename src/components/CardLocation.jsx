import React from 'react'


const CardLocation = ({location}) => {

   
  return (
    <div className='container-location'>
      <div className='card-name'>
        <h2> {location?.name} </h2>
      </div>
      <div className='card-location'>
        <h3> <span>Type: </span> {location?.type} </h3>
        <h3> <span>Dimension: </span> {location?.type} </h3>
        <h3> <span>Population: </span> {location?.residents.length} </h3>
      </div>
    </div>
  )
}

export default CardLocation