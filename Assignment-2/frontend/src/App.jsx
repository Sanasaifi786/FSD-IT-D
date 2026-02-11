import { useState } from 'react'
import { Header } from './component/Header'
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Work from './component/Work';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/work' element={<Work/>}/>
      </Routes>
    </>
  )
}

export default App
