import React from 'react'


import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'


const Fridges = () => {

    const firstFiveImages = fridgeData.slice(0,5)

  return (
   <>
    <div className="proTitle">
        <h2>Fridges</h2>
    </div>
    <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox' key={item.id}>
                        <Link to='/fridges'>
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

export default Fridges
