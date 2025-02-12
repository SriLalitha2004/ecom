import React from 'react'


import { speakerData } from '../data/speakers'
import { Link } from 'react-router-dom'


const Mobiles = () => {

    const firstFiveImages = speakerData.slice(0,5)

  return (
   <>
    <div className="proTitle">
        <h2>Speakers</h2>
    </div>
    <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox' key={item.id}>
                        <Link to='/speakers'>
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

export default Mobiles