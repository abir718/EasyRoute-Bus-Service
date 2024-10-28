import { useState } from 'react'
import './App.css'
import Header from './Header'
import Offer from './Offer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Offer></Offer>
    </>
  )
}

export default App
