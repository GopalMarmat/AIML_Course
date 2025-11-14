import { siteData } from '../data/siteData';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home(){
  return (
    <div>
      <section className='relative overflow-hidden rounded-2xl p-8 glass' >
        <div className='absolute inset-0 -z-10' aria-hidden>
          <svg className='w-full h-full' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'>
            <defs><linearGradient id='g1' x1='0' x2='1'><stop offset='0' stopColor='#0ea5e9' stopOpacity='0.06'/><stop offset='1' stopColor='#6366f1' stopOpacity='0.06'/></linearGradient></defs>
            <rect width='100%' height='100%' fill='url(#g1)' />
            <g opacity='0.06' transform='translate(50,10)'><path d='M0 80 C150 10 300 150 480 40' stroke='#9f7aea' strokeWidth='2' fill='none' /></g>
          </svg>
        </div>

        <div className='grid md:grid-cols-2 gap-6 items-center'>
          <div>
            <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className='text-4xl md:text-5xl font-extrabold text-white'>{siteData.hero.headline}</motion.h1>
            <motion.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.7}} className='mt-4 text-slate-200 max-w-xl'>{siteData.hero.subtitle}</motion.p>
            <div className='mt-6 flex gap-3'>
              <Link href='/course' className='btn-primary'>View Course</Link>
              <Link href='/projects' className='px-4 py-2 rounded border border-white/10 text-sm'>Explore Projects</Link>
            </div>
            <div className='mt-6 text-sm text-slate-300'>Curated by <strong>{siteData.name}</strong> • {siteData.location}</div>
          </div>
          <div className='flex justify-center'>
            <div className='w-64 h-64 rounded-xl glass flex items-center justify-center'>
              <div className='text-center'>
                <img src='/profile.jpg' alt='Profile' className='w-40 h-40 rounded-full object-cover mx-auto border-4 border-white/10' />
                <div className='mt-3 text-white font-semibold'>{siteData.name}</div>
                <div className='text-slate-300 text-sm'>AI/ML Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-8 grid md:grid-cols-3 gap-4'>
        <div className='glass p-4'>
          <h3 className='text-white font-semibold'>Tools & Frameworks</h3>
          <ul className='mt-2 text-slate-300 text-sm'>{siteData.tools.map((t,i)=>(<li key={i}>{t}</li>))}</ul>
        </div>
        <div className='glass p-4'>
          <h3 className='text-white font-semibold'>Contact</h3>
          <p className='mt-2 text-slate-300 text-sm'>{siteData.email} • {siteData.phone}</p>
          <p className='mt-2 text-slate-300 text-sm'>{siteData.location}</p>
        </div>
        <div className='glass p-4'>
          <h3 className='text-white font-semibold'>Career Paths</h3>
          <p className='mt-2 text-slate-300 text-sm'>Machine Learning Engineer • Data Scientist • MLOps • NLP Engineer</p>
        </div>
      </section>
    </div>
  );
}
