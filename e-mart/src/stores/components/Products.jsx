import React from 'react'
import Mobiles from './Mobiles'
import Computers from './Computers'
import AirConditioners from './AC'
import Books from './Books'
import Furniture from './Furniture'
import MensWear from './MensWear'
import Watches from './Watch'
import Fridges from './Fridge'
import Womans from './Woman'

const products = () => {
  return (
    <div>
        <Mobiles />
        <Computers />
        <AirConditioners />
        <Books />
        <Furniture />
        <MensWear />
        <Watches />
        <Fridges />
        <Womans />
    </div>
  )
}

export default products