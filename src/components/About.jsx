import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay },
})

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div {...fadeUp()}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-text">01 — About</span>
          </div>
          <div className="section-title">Who I Am</div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
          {/* CODE BLOCK */}
          <motion.div {...fadeUp(0.1)} className="glow-card" style={{ gridColumn: '1 / -1' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '14px 20px',
              borderBottom: '1px solid var(--border)',
              background: 'rgba(255,255,255,0.02)',
            }}>
              {['#ff5f57','#febc2e','#28c840'].map(c => (
                <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
              ))}
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11, color: 'var(--text3)', marginLeft: 'auto',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{ color: 'var(--accent2)' }}>●</span> ashraful.py
              </div>
            </div>
            <div style={{
              padding: '24px 28px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13, lineHeight: 2, overflowX: 'auto',
            }}>
              <span style={{ color: 'var(--purple-bright)', fontWeight: 700 }}>class </span>
              <span style={{ color: 'var(--accent3)' }}>AshrafulIslam</span>:<br />
              &nbsp;&nbsp;<span style={{ color: 'var(--purple-bright)', fontWeight: 700 }}>def </span>
              <span style={{ color: 'var(--accent-bright)' }}>__init__</span>
              (<span style={{ color: 'var(--cyan)' }}>self</span>):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--cyan)' }}>self</span>.role &nbsp;&nbsp;&nbsp;= [
              <span style={{ color: 'var(--accent2)' }}>"AI Researcher"</span>, <span style={{ color: 'var(--accent2)' }}>"Full Stack Dev"</span>, <span style={{ color: 'var(--accent2)' }}>"IEEE Certified"</span>]<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--cyan)' }}>self</span>.focus &nbsp;&nbsp;= [
              <span style={{ color: 'var(--accent2)' }}>"Deep Learning"</span>, <span style={{ color: 'var(--accent2)' }}>"IoT"</span>, <span style={{ color: 'var(--accent2)' }}>"Edge AI"</span>, <span style={{ color: 'var(--accent2)' }}>"Computer Vision"</span>]<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--cyan)' }}>self</span>.thesis &nbsp;= <span style={{ color: 'var(--accent2)' }}>"Sustainable Edge Vision: Energy-Efficient DL for Crop Disease"</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--cyan)' }}>self</span>.ieee &nbsp;&nbsp;= <span style={{ color: 'var(--accent2)' }}>"IEEE i-COSTE 2025 Certified ✅"</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--cyan)' }}>self</span>.goal &nbsp;&nbsp;= <span style={{ color: 'var(--accent2)' }}>"Intelligent systems for a better world 🌍"</span><br /><br />
              &nbsp;&nbsp;<span style={{ color: 'var(--purple-bright)', fontWeight: 700 }}>def </span>
              <span style={{ color: 'var(--accent-bright)' }}>say_hi</span>(<span style={{ color: 'var(--cyan)' }}>self</span>):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--accent-bright)' }}>print</span>(<span style={{ color: 'var(--accent2)' }}>"Let's build intelligent systems together 🚀"</span>)
            </div>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {[
            { icon: '🔬', title: 'Research Focus', text: 'Smart Agriculture, Edge Computing, Computer Vision, Energy-Efficient Deep Learning', color: 'var(--accent)' },
            { icon: '📚', title: 'Currently Learning', text: 'LLM Fine-tuning, Cloud AI (AWS SageMaker), TinyML, Federated Learning', color: 'var(--purple-bright)' },
            { icon: '🌏', title: 'Based In', text: 'Trishal, Mymensingh, Bangladesh — Jatiya Kabi Kazi Nazrul Islam University', color: 'var(--accent2)' },
          ].map(({ icon, title, text, color }, i) => (
            <motion.div key={title} {...fadeUp(0.1 + i * 0.1)} className="glow-card" style={{ padding: 24 }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                color, marginBottom: 8,
                textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700,
              }}>{title}</div>
              <div style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>{text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}