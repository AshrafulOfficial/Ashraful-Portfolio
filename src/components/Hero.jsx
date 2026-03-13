import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const roles = ['AI Researcher', 'Full Stack Developer', 'IEEE Certified', 'Edge AI Enthusiast']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section style={{ padding: '80px 0 120px', position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: 80, flexWrap: 'wrap',
        }}>

          {/* TEXT SIDE */}
          <div style={{ flex: 1, minWidth: 320 }}>

            {/* STATUS BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.2)',
                borderRadius: 24, padding: '6px 16px', marginBottom: 24,
              }}
            >
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: 'var(--accent2)', display: 'inline-block',
                animation: 'pulse-dot 2s infinite',
              }} />
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11, color: 'var(--accent2)',
                fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
              }}>Open to Research Collaborations</span>
            </motion.div>

            {/* NAME — Besides*/}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(48px, 6.5vw, 80px)',
                fontWeight: 800, lineHeight: 1.0,
                letterSpacing: '-3px', marginBottom: 16,
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ color: 'var(--text)' }}>Ashraful </span>
              <span style={{
                background: 'linear-gradient(135deg, var(--accent-bright) 0%, var(--purple-bright) 50%, var(--cyan) 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                animation: 'gradshift 5s ease infinite',
              }}>Islam</span>
            </motion.h1>

            {/* TYPEWRITER */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 18, color: 'var(--purple-bright)',
                fontWeight: 400, marginBottom: 24, minHeight: 32,
                letterSpacing: '-0.3px',
              }}
            >
              <span style={{ color: 'var(--text3)' }}>// </span>
              {displayed}
              <span style={{
                display: 'inline-block', width: 2, height: '1.1em',
                background: 'var(--accent-bright)', marginLeft: 2,
                verticalAlign: 'middle', animation: 'blink 1s step-end infinite',
              }} />
            </motion.div>

            {/* DESC */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: 16, color: 'var(--text2)',
                maxWidth: 520, lineHeight: 1.8, marginBottom: 14,
                fontWeight: 400,
              }}
            >
              Building intelligent systems at the intersection of{' '}
              <span style={{ color: 'var(--text)', fontWeight: 600 }}>deep learning</span>,{' '}
              <span style={{ color: 'var(--text)', fontWeight: 600 }}>IoT</span>, and{' '}
              <span style={{ color: 'var(--text)', fontWeight: 600 }}>sustainable agriculture</span>.
              IEEE Certified Researcher from Bangladesh.
            </motion.p>

            {/* LOCATION */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12, color: 'var(--text3)', marginBottom: 36,
                display: 'flex', alignItems: 'center', gap: 8,
              }}
            >
              <span>📍</span>
              <span style={{ color: 'var(--text2)' }}>Trishal, Mymensingh, Bangladesh</span>
              <span style={{ color: 'var(--border2)' }}>·</span>
              <span style={{ color: 'var(--accent2)' }}>JKKNIU</span>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}
            >
              <a className="btn-primary" href="https://github.com/ashrafulofficial" target="_blank" rel="noreferrer">
                View GitHub →
              </a>
              <a className="btn-secondary" href="https://www.linkedin.com/in/ashrafulofficial-in/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn-secondary" href="mailto:ashrafulofficialc@gmail.com">
                Contact
              </a>
              <a className="btn-resume" href="/Ashraful_Resume.pdf" target="_blank" rel="noreferrer" download>
                 Download My Resume ↓
              </a>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}
            >
              {[
                { num: '4+', label: 'Publications' },
                { num: '4+', label: 'Projects' },
                { num: 'IEEE', label: 'Certified' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div style={{
                    fontSize: 26, fontWeight: 800,
                    background: 'linear-gradient(135deg, var(--accent-bright), var(--purple-bright))',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    letterSpacing: '-1px',
                  }}>{num}</div>
                  <div style={{
                    fontSize: 11, color: 'var(--text3)',
                    fontFamily: "'JetBrains Mono', monospace",
                    textTransform: 'uppercase', letterSpacing: '1px',
                  }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* PHOTO SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ flexShrink: 0, position: 'relative' }}
          >
            <div style={{
              position: 'absolute', inset: -16, borderRadius: '50%',
              background: 'conic-gradient(from 0deg, var(--accent), var(--purple), var(--cyan), var(--accent))',
              opacity: 0.15, filter: 'blur(20px)',
              animation: 'float 6s ease-in-out infinite',
            }} />

            <div style={{
              width: 240, height: 240, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--purple) 100%)',
              padding: 3, position: 'relative',
              animation: 'float 6s ease-in-out infinite',
            }}>
              <div style={{
                width: '100%', height: '100%', borderRadius: '50%',
                overflow: 'hidden', background: 'var(--bg3)',
              }}>
                <img
                  src="/ashraful.png"
                  alt="Ashraful Islam"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
            </div>

            {/* FLOATING IEEE BADGE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                position: 'absolute', bottom: -10, right: -20,
                background: 'rgba(14,21,37,0.95)',
                border: '1px solid rgba(59,130,246,0.3)',
                borderRadius: 12, padding: '10px 14px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 20 }}>🏅</span>
                <div style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  <div style={{ fontSize: 11, color: 'var(--accent-bright)', fontWeight: 700 }}>IEEE i-COSTE 2025</div>
                  <div style={{ fontSize: 10, color: 'var(--text3)' }}>Certified Researcher</div>
                </div>
              </div>
            </motion.div>

            {/* FLOATING PAPERS BADGE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              style={{
                position: 'absolute', top: 10, left: -30,
                background: 'rgba(14,21,37,0.95)',
                border: '1px solid rgba(139,92,246,0.3)',
                borderRadius: 12, padding: '10px 14px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 20 }}>📄</span>
                <div style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  <div style={{ fontSize: 11, color: 'var(--purple-bright)', fontWeight: 700 }}>4 Papers</div>
                  <div style={{ fontSize: 10, color: 'var(--text3)' }}>Published</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}