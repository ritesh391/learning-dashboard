'use client'

import { motion } from 'framer-motion'

const activityColors = ['#27272a', '#312e81', '#4338ca', '#818cf8']

function generateActivity() {
  return Array.from({ length: 26 }, () =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 4))
  )
}

export default function ActivityTile() {
  const activity = generateActivity()

  return (
    <motion.article
      style={{
        borderRadius: 12,
        background: '#18181b',
        border: '1px solid #27272a',
        padding: 20,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{
        scale: 1.01,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
    >
      <h2 style={{ color: '#fff', fontWeight: 600, fontSize: 14, marginBottom: 16 }}>
        Learning Activity
      </h2>

      <div style={{ display: 'flex', gap: 3, overflowX: 'hidden' }}>
        {activity.map((week, wi) => (
          <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {week.map((day, di) => (
              <div
                key={di}
                style={{
                  width: 10, height: 10,
                  borderRadius: 2,
                  background: activityColors[day],
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 12 }}>
        <span style={{ color: '#52525b', fontSize: 11 }}>Less</span>
        {activityColors.map((c, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: 2, background: c }} />
        ))}
        <span style={{ color: '#52525b', fontSize: 11 }}>More</span>
      </div>
    </motion.article>
  )
}
