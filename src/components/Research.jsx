import { motion } from 'framer-motion'

const papers = [
  {
    venue: 'IEEE i-COSTE 2025', type: 'ieee',
    title: 'Solar-Powered IoT-Based Smart Farming Model (SPISFM)',
    desc: 'An innovative solar-powered IoT architecture integrating renewable energy with real-time sensor networks for automated crop monitoring, irrigation control, and environmental data collection.',
    tags: ['IoT', 'Smart Agriculture', 'Solar Energy', 'Sensor Networks'],
    icon: '☀️',
  },
  {
    venue: 'MEETCON 2025 — Türkiye', type: 'meetcon',
    title: 'Deep Learning-Assisted Detection of Tree Canopy for Afforestation Targeting',
    desc: 'A deep learning approach using computer vision to identify and analyze tree canopy coverage from satellite/aerial imagery — assisting in identifying optimal areas for afforestation.',
    tags: ['Computer Vision', 'CNN', 'Remote Sensing', 'Climate AI'],
    icon: '🌳',
  },
  {
    venue: 'MEETCON 2025 — Türkiye', type: 'meetcon',
    title: 'An Intelligent Solar-Based Agricultural Automation System',
    desc: 'A comprehensive intelligent automation system powered by solar energy combining ML models with IoT sensors to automate irrigation, fertilization, pest detection, and yield prediction.',
    tags: ['ML', 'Automation', 'IoT', 'Crop Intelligence'],
    icon: '🤖',
  },
  {
    venue: 'Undergraduate Thesis — JKKNIU', type: 'thesis',
    title: 'Sustainable Edge Vision: Energy-Efficient Deep Learning for Intelligent Crop Disease Detection',
    desc: 'Proposes an edge computing framework deploying optimized deep learning models on low-power devices for real-time crop disease detection. Focuses on model compression (pruning, quantization).',
    tags: ['Edge AI', 'Model Compression', 'TinyML', 'Crop Disease', 'On-Device Inference'],
    icon: '🌾',
  },
]

const venueStyle = {
  ieee:    { bg: 'rgba(59,130,246,0.1)',   color: '#60a5fa', border: 'rgba(59,130,246,0.25)' },
  meetcon: { bg: 'rgba(139,92,246,0.1)',   color: '#a78bfa', border: 'rgba(139,92,246,0.25)' },
  thesis:  { bg: 'rgba(245,158,11,0.1)',   color: '#fbbf24', border: 'rgba(245,158,11,0.25)' },
}

export default function Research() {
  return (
    <section id="research" className="section" style={{ background: 'rgba(8,13,26,0.5)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-text">02 — Research</span>
          </div>
          <div className="section-title">Publications</div>
        </motion.div>

        <div style={{ display: 'grid', gap: 16 }}>
          {papers.map((p, i) => {
            const vs = venueStyle[p.type]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glow-card"
                style={{ padding: '28px 32px', display: 'flex', gap: 24, alignItems: 'flex-start' }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                  background: vs.bg, border: `1px solid ${vs.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22,
                }}>{p.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                      fontWeight: 700, padding: '3px 12px', borderRadius: 20,
                      background: vs.bg, color: vs.color, border: `1px solid ${vs.border}`,
                      letterSpacing: '0.5px',
                    }}>{p.venue}</span>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, lineHeight: 1.45, letterSpacing: '-0.3px' }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 14 }}>{p.desc}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}