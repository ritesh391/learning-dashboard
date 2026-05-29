export default function SkeletonCard() {
  return (
    <div style={{
      borderRadius: 12,
      background: '#18181b',
      border: '1px solid #27272a',
      padding: 20,
      animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
    }}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
      <div style={{ width: 32, height: 32, borderRadius: 8, background: '#27272a', marginBottom: 16 }} />
      <div style={{ width: '75%', height: 14, borderRadius: 6, background: '#27272a', marginBottom: 8 }} />
      <div style={{ width: '50%', height: 11, borderRadius: 6, background: '#27272a', marginBottom: 24 }} />
      <div style={{ width: '100%', height: 6, borderRadius: 9999, background: '#27272a' }} />
    </div>
  )
}
