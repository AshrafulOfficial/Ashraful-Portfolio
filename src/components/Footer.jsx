export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(59,130,246,0.08)',
      padding: '40px 0',
    }}>
      <div className="container" style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12, color: 'var(--text3)',
        }}>
          crafted with ❤️ by <span style={{ color: 'var(--accent-bright)' }}>Ashraful Islam</span> · 2025
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, color: 'var(--text3)',
          display: 'flex', gap: 20,
        }}>
          {[
            { name: 'GitHub', href: 'https://github.com/ashrafulislam' },
            { name: 'LinkedIn', href: 'https://linkedin.com/in/ashrafulislam' },
            { name: 'Email', href: 'mailto:ashraful@example.com' },
          ].map(item => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                cursor: 'pointer', transition: 'color 0.2s',
                color: 'var(--text3)', textDecoration: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-bright)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}