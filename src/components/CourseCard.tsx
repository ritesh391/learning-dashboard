'use client'

import { motion } from 'framer-motion'
import { BookOpen, Code2, FileCode, Layers, Database } from 'lucide-react'
import { Course } from '@/types'

interface CourseCardProps {
  course: Course
  index: number
}

function getIcon(name: string) {
  if (name === 'Code2') return Code2
  if (name === 'FileCode') return FileCode
  if (name === 'Layers') return Layers
  if (name === 'Database') return Database
  return BookOpen
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const Icon = getIcon(course.icon_name)

  const statusLabel =
    course.progress >= 100 ? 'Completed' :
    course.progress >= 50 ? 'Almost done' :
    'In progress'

  return (
    <motion.article
      style={{ borderRadius: 12, background: '#18181b', border: '1px solid #27272a', padding: 20, position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(99,102,241,0.4)', transition: { type: 'spring', stiffness: 300, damping: 20 } }}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon size={18} color="#818cf8" />
          </div>
          <span style={{ fontSize: 13, color: '#a1a1aa', fontWeight: 500 }}>{course.progress}%</span>
        </div>
        <h3 style={{ color: '#fff', fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{course.title}</h3>
        <p style={{ color: '#52525b', fontSize: 12, marginBottom: 16 }}>{statusLabel}</p>
        <div style={{ height: 6, width: '100%', background: '#27272a', borderRadius: 9999, overflow: 'hidden' }}>
          <motion.div
            style={{ height: '100%', background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', borderRadius: 9999 }}
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 + index * 0.1 }}
          />
        </div>
      </div>
    </motion.article>
  )
}