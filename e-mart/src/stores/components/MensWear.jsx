import React from 'react'


import { menData} from '../data/men'
import { Link } from 'react-router-dom'


const MensWear = () => {

    const firstFiveImages = menData.slice(0,5)

  return (
   <>
    <div className="proTitle">
        <h2>Mens Wear</h2>
    </div>
    <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox' key={item.id}>
                        <Link to='/menswear'>
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

export default MensWear
