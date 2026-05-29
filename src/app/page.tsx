import { getCourses } from '@/lib/supabase'
import Sidebar from '@/components/Sidebar'
import BentoGrid from '@/components/BentoGrid'

export default async function DashboardPage() {
  const courses = await getCourses()

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#09090b' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: 24, paddingBottom: 80, overflowX: 'hidden' }}>
        <BentoGrid courses={courses} />
      </main>
    </div>
  )
}
