import { useState } from 'react'
import './App.css'
import { BottomBar } from './components/BottomBar'
import { TopBar } from './components/TopBar'
import { PokeList } from './components/PokeList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar/>
      <PokeList/>
      <BottomBar/>
    </>
  )
}

export default App
