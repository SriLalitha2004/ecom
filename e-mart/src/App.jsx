import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import CompPage from './stores/pages/CompPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import FurniturePage from './stores/pages/FurniturePage'
import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'
import TvPage from './stores/pages/TvPage'
import SpeakersPage from './stores/pages/SpeakersPage'
import BookPage from './stores/pages/BookPage'

import MobileSingle from './stores/singles/MobileSingle'
import UserCart from './stores/UserCart'
import FridgePage from './stores/pages/FridgePage'
import ComputerSingle from './stores/singles/ComputerSingle'
import FurnitureSingle from './stores/singles/FurnitureSingle'
import KitchenSingle from './stores/singles/KitchenSingle'
import AcSingle from './stores/singles/AcSingle'
import MenSingle from './stores/singles/MenSingle'
import WatchSingle from './stores/singles/WatchSingle'
import WomanSingle from './stores/singles/WomanSingle'
import FridgeSingle from './stores/singles/FridgeSingle'
import TvSingle from './stores/singles/TvSingle'
import { CartProvider } from './stores/context/cartContext'
import SpeakerSingle from './stores/singles/SpeakerSingle'
import BookSingle from './stores/singles/BookSingle'


const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element = { <LandingPage />}/>
        <Route path= '/kitchen' element = {<KitchenPage />} />
        <Route path='/mobiles' element= {<MobilePage />} />
        <Route path='/computers' element= {<CompPage />} />
        <Route path='/watches' element= {<WatchPage />} />
        <Route path='/fridges' element={<FridgePage />} />
        <Route path='/menswear' element= {<MenPage />} /> 
        <Route path='/woman' element= {<WomanPage />} />             
        <Route path='/furniture' element= {<FurniturePage />} />             
        <Route path='/airconditioners' element= {<AcPage />} />  
        <Route path='/tv' element= {<TvPage />} />
        <Route path='/speakers' element= {<SpeakersPage />} /> 
        <Route path='/books' element= {<BookPage />} />           
        <Route path='/mobiles/:id' element = {<MobileSingle />} />
      <Route path='/cart' element = {<UserCart />} />
      <Route path='/airconditioners/:id' element = {<AcSingle />} />
      <Route path='/computers/:id' element = {<ComputerSingle />} />
      <Route path='/furniture/:id' element = {<FurnitureSingle />} />
      <Route path='/kitchen/:id' element = {<KitchenSingle />} />
      <Route path='/menswear/:id' element = {<MenSingle />} />
      <Route path='/watches/:id' element = {<WatchSingle />} />
      <Route path='/woman/:id' element = {<WomanSingle />} />
      <Route path='/fridges/:id' element = {<FridgeSingle />} />
      <Route path='/tv/:id' element = {<TvSingle />} />
      <Route path='/speakers/:id' element = {<SpeakerSingle />} />
      <Route path='/books/:id' element = {<BookSingle />} />
      </Routes>
    </CartProvider>
  )
}

export default App