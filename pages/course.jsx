import { siteData } from '../data/siteData';
import ModuleCard from '../components/ModuleCard';
export default function Course(){ return (<div>
  <h2 className='text-2xl font-bold text-white mb-3'>Course Modules</h2>
  <p className='text-slate-300 mb-4'>Structured modules with durations and hands-on projects.</p>
  <div className='space-y-4'>{siteData.modules.map(m=>(<ModuleCard key={m.id} module={m}/>))}</div>
</div>); }
