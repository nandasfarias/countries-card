import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card.jsx'

import londonEye from './assets/london-eye.jpg'
import sevenSisters from './assets/seven-sisters.jpg'
import stonehenge from './assets/stonehenge.jpg'

function App() {

  return (
    <div className="w-screen h-screen bg-[#f7f7f7]">
      <h1>England Places to Visit</h1>

      <div>
        {/* London Eye Card */}
        <Card img={londonEye}
        title="London Eye" 
        text="The London Eye is a giant observation wheel on the River Thames. It offers amazing panoramic views of London's skyline."/>

        {/* Seven Sisters Card */}
        <Card
        img={sevenSisters}
        title="Seven Sisters"
        text="Seven Sisters is a group of stunning white cliffs on the south coast of England. It's known for its dramatic landscapes and beautiful ocean views."/>

        {/* Stonehenge Card */}
        <Card
        img={stonehenge}
        title="Stonehenge"
        text="Stonehenge is an ancient stone monument in England. Its purpose remains a mystery and fascinates visitors from around the world."/>
      </div>
    </div>
  )
}

export default App
