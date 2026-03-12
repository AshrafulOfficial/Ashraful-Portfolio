import { motion } from 'framer-motion'

const groups = [
  {
    title: 'AI / ML', icon: '🧠',
    chips: ['TensorFlow', 'PyTorch', 'Keras', 'scikit-learn', 'HuggingFace', 'OpenCV'],
    color: '#60a5fa', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)',
  },
  {
    title: 'Languages', icon: '💻',
    chips: ['Python', 'JavaScript', 'Java', 'C', 'C++'],
    color: '#a78bfa', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)',
  },
  {
    title: 'Web & Backend', icon: '🌐',
    chips: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Nginx'],
    color: '#22d3ee', bg: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.2)',
  },
  {
    title: 'IoT & Edge', icon: '⚡',
    chips: ['Arduino', 'Raspberry Pi', 'TinyML', 'Edge AI'],
    color: '#fbbf24', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'rgba(8,13,26,0.5)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-text">04 — Skills</span>
          </div>
          <div className="section-title">Tech Stack</div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glow-card"
              style={{ padding: 26 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: g.bg, border: `1px solid ${g.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20,
                }}>{g.icon}</div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
                  color: g.color, fontWeight: 700, letterSpacing: '0.5px',
                }}>{g.title}</div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {g.chips.map(chip => (
                  <span key={chip} style={{
                    fontSize: 12, padding: '5px 13px', borderRadius: 20,
                    fontFamily: "'JetBrains Mono', monospace", fontWeight: 600,
                    background: g.bg, color: g.color, border: `1px solid ${g.border}`,
                    transition: 'transform 0.15s',
                    cursor: 'default',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >{chip}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}