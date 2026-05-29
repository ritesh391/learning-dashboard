'use client'

import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function HeroTile() {
  return (
    <motion.article
      style={{
        borderRadius: 12,
        background: '#18181b',
        border: '1px solid #27272a',
        padding: 24,
        gridColumn: 'span 2',
        position: 'relative',
        overflow: 'hidden',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.01,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
    >
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 256, height: 256,
        background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ color: '#a1a1aa', fontSize: 14, marginBottom: 4 }}>Good morning 👋</p>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 24 }}>
          Welcome back,{' '}
          <span style={{ color: '#818cf8' }}>Ritesh</span>
        </h1>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          background: 'rgba(39,39,42,0.8)',
          borderRadius: 12,
          padding: '10px 16px',
          border: '1px solid #3f3f46',
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: 'rgba(249,115,22,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Flame size={18} color="#fb923c" />
          </div>
          <div>
            <p style={{ color: '#fff', fontWeight: 600, fontSize: 16, lineHeight: 1 }}>7 day streak</p>
            <p style={{ color: '#71717a', fontSize: 12, marginTop: 4 }}>Keep it going!</p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
