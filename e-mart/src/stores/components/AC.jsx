import React from 'react'


import { acData} from '../data/ac'
import { Link } from 'react-router-dom'


const AirConditioners = () => {

    const firstFiveImages = acData.slice(0,5)

  return (
   <>
    <div className="proTitle">
        <h2>Air Conditioners</h2>
    </div>
    <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox' key={item.id}>
                        <Link to='/airconditioners'>
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

export default AirConditioners
