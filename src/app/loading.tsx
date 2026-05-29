import SkeletonCard from '@/components/SkeletonCard'

export default function Loading() {
  return (
    <div className="flex min-h-screen" style={{ background: '#09090b' }}>
      <div style={{ width: 64, minHeight: '100vh', background: '#18181b', borderRight: '1px solid #27272a' }} />
      <main style={{ flex: 1, padding: 24 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 16
        }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </main>
    </div>
  )
}
