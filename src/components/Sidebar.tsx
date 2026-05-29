'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LayoutDashboard, BookOpen, BarChart2, Settings, Trophy, ChevronRight } from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: BookOpen, label: 'Courses', id: 'courses' },
  { icon: BarChart2, label: 'Progress', id: 'progress' },
  { icon: Trophy, label: 'Achievements', id: 'achievements' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

export default function Sidebar() {
  const [active, setActive] = useState('dashboard')
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      {/* Desktop sidebar */}
      <nav style={{
        display: 'none',
        flexDirection: 'column',
        minHeight: '100vh',
        background: '#18181b',
        borderRight: '1px solid #27272a',
        width: collapsed ? 64 : 220,
        transition: 'width 0.3s',
        flexShrink: 0,
      }}
        className="md-sidebar"
      >
        <style>{`
          @media (min-width: 768px) {
            .md-sidebar { display: flex !important; }
            .mobile-nav { display: none !important; }
          }
        `}</style>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 12px', borderBottom: '1px solid #27272a',
        }}>
          {!collapsed && (
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: 1 }}>
              LearnOS
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            style={{
              padding: 6, borderRadius: 8, border: 'none', cursor: 'pointer',
              background: 'transparent', color: '#71717a', marginLeft: 'auto',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <ChevronRight
              size={16}
              style={{ transform: collapsed ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.3s' }}
            />
          </button>
        </div>

        {/* Nav items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 8, flex: 1 }}>
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = active === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                style={{
                  position: 'relative', display: 'flex', alignItems: 'center',
                  gap: 10, padding: '10px 12px', borderRadius: 8,
                  border: 'none', cursor: 'pointer', background: 'transparent',
                  color: isActive ? '#fff' : '#71717a', textAlign: 'left', width: '100%',
                  fontSize: 14, fontWeight: isActive ? 500 : 400,
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(99,102,241,0.15)',
                      borderRadius: 8, border: '1px solid rgba(99,102,241,0.3)',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon size={16} style={{ position: 'relative', zIndex: 1, flexShrink: 0 }} />
                {!collapsed && (
                  <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
                )}
              </button>
            )
          })}
        </div>

        {/* User */}
        <div style={{ padding: 12, borderTop: '1px solid #27272a' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 4px' }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%', background: '#6366f1',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: 12, fontWeight: 700, flexShrink: 0,
            }}>R</div>
            {!collapsed && (
              <div style={{ overflow: 'hidden' }}>
                <p style={{ color: '#fff', fontSize: 13, fontWeight: 500, margin: 0 }}>Ritesh</p>
                <p style={{ color: '#52525b', fontSize: 11, margin: 0 }}>Student</p>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <nav
        className="mobile-nav"
        style={{
          position: 'fixed', bottom: 0, left: 0, right: 0,
          background: '#18181b', borderTop: '1px solid #27272a',
          display: 'flex', alignItems: 'center', justifyContent: 'space-around',
          padding: '8px 4px', zIndex: 50,
        }}
      >
        {navItems.slice(0, 4).map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              style={{
                position: 'relative', display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: 4, padding: 8, borderRadius: 8,
                border: 'none', cursor: 'pointer', background: 'transparent',
                color: isActive ? '#818cf8' : '#52525b', fontSize: 11,
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNavMobile"
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(99,102,241,0.15)', borderRadius: 8,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon size={20} style={{ position: 'relative', zIndex: 1 }} />
              <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </>
  )
}
