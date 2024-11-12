import { useState } from 'react'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Services />
      <Project />
      <Footer />
    </>
  )
}

export default App
