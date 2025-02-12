import React from 'react'


import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'


const Womans = () => {

    const firstFiveImages = womanData.slice(0,5)

  return (
   <>
    <div className="proTitle">
        <h2>Womans Dressing</h2>
    </div>
    <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox' key={item.id}>
                        <Link to='/woman'>
                            <img className='proImage' src={item.image} alt="" />
                        </Link>
                    </div>
                )
            })
        }
    </div>
   </>
  )
} 

export default Womans