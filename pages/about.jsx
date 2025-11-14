import { siteData } from '../data/siteData';
import { motion } from 'framer-motion';

export default function About(){
  return (
    <div className='space-y-6'>
      <motion.div initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className='grid md:grid-cols-2 gap-6 items-center'>
        <div className='glass p-6'>
          <h2 className='text-2xl font-bold text-white'>About the Program</h2>
          <p className='mt-3 text-slate-200'>This AIML Professional Certification Program is designed to give learners a practical, project-driven pathway into AI and Machine Learning. It combines theory, statistics, and hands-on projects to prepare you for real-world roles.</p>
          <ul className='mt-3 text-slate-300 list-disc ml-5'>
            <li>Project-driven learning</li>
            <li>Industry-aligned curriculum</li>
            <li>Mentor support & capstone project</li>
          </ul>
        </div>
        <div className='flex justify-center'>
          <div className='glass p-6 text-center'>
            <img src='/profile.jpg' className='w-40 h-40 rounded-full mx-auto object-cover border-4 border-white/10' alt='profile' />
            <h3 className='mt-3 font-semibold text-white'>{siteData.name}</h3>
            <p className='text-slate-300 text-sm'>Course curator & mentor</p>
            <p className='mt-3 text-slate-300 text-sm'>{siteData.location}</p>
          </div>
        </div>
      </motion.div>

      <div className='grid md:grid-cols-3 gap-4'>
        <div className='glass p-4 text-center'>
          <h4 className='font-semibold text-white'>Outcome</h4>
          <p className='text-slate-300 text-sm mt-2'>Industry-ready projects and portfolio</p>
        </div>
        <div className='glass p-4 text-center'>
          <h4 className='font-semibold text-white'>Time Commitment</h4>
          <p className='text-slate-300 text-sm mt-2'>Flexible schedule; estimated 8-10 weeks</p>
        </div>
        <div className='glass p-4 text-center'>
          <h4 className='font-semibold text-white'>Prerequisites</h4>
          <p className='text-slate-300 text-sm mt-2'>Basic Python knowledge recommended</p>
        </div>
      </div>
    </div>
  );
}
