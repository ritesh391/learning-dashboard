'use client'

import { motion } from 'framer-motion'
import { Course } from '@/types'
import HeroTile from './HeroTile'
import ActivityTile from './ActivityTile'
import CourseCard from './CourseCard'

interface BentoGridProps {
  courses: Course[]
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function BentoGrid({ courses }: BentoGridProps) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 16,
      }}
    >
      <HeroTile />
      <ActivityTile />
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </motion.section>
  )
}
