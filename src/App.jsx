import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const cards = document.querySelectorAll('.glow-card')
    const handleMove = (e, card) => {
      const rect = card.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      card.style.setProperty('--mouse-x', `${x}%`)
      card.style.setProperty('--mouse-y', `${y}%`)
    }
    const handleEnter = (card) => {
      card.classList.add('active')
    }
    const handleLeave = (card) => {
      card.classList.remove('active')
    }
    const listeners = []
    cards.forEach(card => {
      const moveFn = (e) => handleMove(e, card)
      const enterFn = () => handleEnter(card)
      const leaveFn = () => handleLeave(card)
      card.addEventListener('mousemove', moveFn)
      card.addEventListener('mouseenter', enterFn)
      card.addEventListener('mouseleave', leaveFn)
      listeners.push({ card, moveFn, enterFn, leaveFn })
    })
    return () => listeners.forEach(({ card, moveFn, enterFn, leaveFn }) => {
      card.removeEventListener('mousemove', moveFn)
      card.removeEventListener('mouseenter', enterFn)
      card.removeEventListener('mouseleave', leaveFn)
    })
  }, [])

  return (
    <>
      <div className="bg-canvas">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
        <div className="orb orb4" />
      </div>
      <div className="noise" />
      <div className="grid-overlay" />
      <div className="content">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Research />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}