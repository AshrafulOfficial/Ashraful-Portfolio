import { motion } from 'framer-motion'

const projects = [
  {
    icon: '👥', color: 'var(--accent)',
    title: 'JKKNIU Social Media App',
    desc: 'Full-stack university social media platform with real-time features, feeds, messaging for students and faculty.',
    stack: ['React', 'Node.js', 'MongoDB', 'Docker'],
    link: 'https://github.com/ashrafulofficial',
  },
  {
    icon: '🚌', color: 'var(--accent2)',
    title: 'Bus Tracker',
    desc: 'Real-time university bus tracking system with live GPS location updates and route visualization.',
    stack: ['React', 'Node.js', 'Google Maps API'],
    link: 'https://github.com/ashrafulofficial',
  },
  {
    icon: '🔒', color: 'var(--purple-bright)',
    title: 'Smart Door Lock',
    desc: 'IoT-based intelligent door lock with face recognition, remote access, and real-time alerts.',
    stack: ['Python', 'OpenCV', 'Arduino', 'IoT'],
    link: 'https://github.com/ashrafulofficial',
  },
  {
    icon: '✈️', color: 'var(--cyan)',
    title: 'Flight Scheduling System',
    desc: 'Automated flight management platform with real-time delay predictions and push notifications.',
    stack: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/ashrafulofficial',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-text">03 — Projects</span>
          </div>
          <div className="section-title">Featured Work</div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card"
              style={{ padding: 28, display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
              onClick={() => window.open(p.link, '_blank')}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14, marginBottom: 18,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26,
              }}>{p.icon}</div>
              <div style={{
                fontSize: 16, fontWeight: 700, marginBottom: 10,
                letterSpacing: '-0.3px',
              }}>{p.title}</div>
              <div style={{
                fontSize: 13, color: 'var(--text2)', lineHeight: 1.7, flex: 1, marginBottom: 20,
              }}>{p.desc}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.stack.map(t => <span key={t} className="stack-tag">{t}</span>)}
              </div>
              <div style={{
                marginTop: 20, paddingTop: 16,
                borderTop: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11, color: p.color, fontWeight: 700,
                  letterSpacing: '0.5px',
                }}>View on GitHub</span>
                <span style={{ color: p.color, fontSize: 16 }}>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}