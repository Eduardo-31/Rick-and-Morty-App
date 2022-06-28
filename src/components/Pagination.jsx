import React from 'react'

const Pagination = ({arrayPages, currentPages, setCurrentPages, quantityPages}) => {

    const prevPage = () => {
        if(currentPages -1 === 0) {
            setCurrentPages(quantityPages)
        }else{
            setCurrentPages(currentPages -1)
        }
    }

    const nextPage = () => {
        if(currentPages + 1 > quantityPages) {
            setCurrentPages(1)
        }else{
            setCurrentPages(currentPages + 1)
        }
    }

  return (
    <div className='container-pagination'>
        <button onClick={prevPage}><i className="fa-solid fa-angles-left"></i></button>
        {   arrayPages?.map(num => (
            <ul onClick={() => setCurrentPages(num)} className={currentPages == num ? 'active': ''}  key={num}>
                <li>{num}</li>
            </ul>
        ))
        }
        <button onClick={nextPage}><i className="fa-solid fa-angles-right"></i></button>
    </div>
  )
}

export default Pagination