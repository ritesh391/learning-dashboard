# Learning Dashboard

A futuristic, animated student learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 15** (App Router) — framework with React Server Components
- **Supabase** — PostgreSQL database and backend
- **Tailwind CSS v4** — styling
- **Framer Motion** — animations
- **Lucide React** — icons

## Getting Started

### 1. Clone the repo and install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Set up Supabase

Run this SQL in your Supabase SQL Editor:

```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0,
  icon_name text not null,
  created_at timestamptz default now()
);

insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'Code2'),
  ('TypeScript Mastery', 40, 'FileCode'),
  ('Next.js App Router', 60, 'Layers'),
  ('Supabase & PostgreSQL', 25, 'Database');
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Architecture

### Server / Client Component Split

- `app/page.tsx` — **Server Component**. Fetches courses from Supabase at request time using `getCourses()`. No "use client" directive, so it runs only on the server. Supabase keys never reach the browser.
- `components/BentoGrid.tsx` — **Client Component**. Receives courses as props, handles Framer Motion stagger animations.
- `components/Sidebar.tsx` — **Client Component**. Manages active nav state and collapse toggle.
- `components/CourseCard.tsx` — **Client Component**. Handles spring hover animations and animated progress bar.
- `components/HeroTile.tsx` — **Client Component**. Entrance animation.
- `components/ActivityTile.tsx` — **Client Component**. Renders contribution graph.

### Loading States

`app/loading.tsx` is automatically shown by Next.js while `page.tsx` is fetching data from Supabase. It renders pulsing skeleton cards that match the shape of the real course cards.

### Animations

- **Staggered entrance** — `BentoGrid` uses Framer Motion `variants` with `staggerChildren: 0.1`
- **Spring hover** — all cards use `whileHover` with `type: "spring", stiffness: 300, damping: 20`
- **Progress bar** — animates from 0 to the real value on mount using `motion.div`
- **Sidebar nav** — uses `layoutId` for a smooth sliding highlight between nav items

## Deployment

Deploy on Vercel by connecting your GitHub repo. Add the two environment variables in the Vercel dashboard under Project Settings → Environment Variables.
