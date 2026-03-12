import { useState, useEffect } from 'react'

const links = ['About', 'Research', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(3,5,13,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(59,130,246,0.1)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div style={{
        maxWidth: 'var(--max-w)', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', padding: '0 48px', height: 68,
      }}>

        {/* LOGO */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--purple) 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 16, fontWeight: 700, color: '#fff',
            boxShadow: '0 4px 16px rgba(59,130,246,0.3)',
          }}>A</div>
          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13, color: 'var(--text)', fontWeight: 700,
            }}>Ashraful Islam</div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, color: 'var(--accent2)',
              letterSpacing: '1.5px', textTransform: 'uppercase',
            }}>AI · Researcher</div>
          </div>
        </a>

        {/* LINKS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {links.map(link => (
            <a
              key={link}
              href={"#" + link.toLowerCase()}
              onMouseEnter={() => setActive(link)}
              onMouseLeave={() => setActive('')}
              style={{
                fontSize: 13, fontWeight: 500,
                color: active === link ? '#0f0' : 'var(--text2)',
                textDecoration: 'none',
                fontFamily: "'Sora', sans-serif",
                padding: '7px 16px', borderRadius: 8,
                background: active === link ? 'rgba(0,255,0,0.1)' : 'transparent',
                border: active === link ? '1px solid #0f0' : '1px solid transparent',
                transition: 'all 0.2s',
              }}
            >
              {link}
            </a>
          ))}

          <a
            href="mailto:ashrafulofficialc@gmail.com"
            style={{
              marginLeft: 12,
              fontSize: 12, fontWeight: 700,
              color: '#fff', textDecoration: 'none',
              fontFamily: "'JetBrains Mono', monospace",
              padding: '8px 18px', borderRadius: 8,
              background: 'linear-gradient(135deg, var(--accent), var(--purple))',
              letterSpacing: '0.5px',
              boxShadow: '0 4px 16px rgba(59,130,246,0.25)',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >Hire Me</a>
        </div>
      </div>
    </nav>
  )
}