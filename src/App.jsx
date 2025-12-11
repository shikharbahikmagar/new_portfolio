import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skill from './components/Skill.jsx'
import Experience from './components/Experience.jsx'
import Project from './components/Project'
import Footer from './components/Footer'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <About />
      <Skill />
      <Experience />
      <Education />

      <Project />
      <Footer />
    </>
  )
}

export default App
