import { useState } from 'react';
import { siteData } from '../data/siteData';
export default function Contact(){
  const [status,setStatus] = useState('');
  async function submit(e){
    e.preventDefault();
    setStatus('Sending...');
    const res = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:e.target.name.value,email:e.target.email.value,message:e.target.message.value})});
    const data = await res.json();
    if(data.ok){ setStatus('Message sent — thank you!'); e.target.reset(); } else { setStatus('Error sending message'); }
  }
  return (<div className='grid md:grid-cols-2 gap-6'>
    <div className='glass p-6'>
      <h2 className='text-2xl font-bold text-white'>Contact</h2>
      <p className='text-slate-300 mt-2'>Email: {siteData.email} • Phone: {siteData.phone}</p>
      <form className='mt-4 space-y-3' onSubmit={submit}>
        <div><label className='text-slate-300 text-sm'>Name</label><input name='name' required className='w-full mt-1 p-2 rounded bg-white/5 border border-white/5' /></div>
        <div><label className='text-slate-300 text-sm'>Email</label><input name='email' type='email' required className='w-full mt-1 p-2 rounded bg-white/5 border border-white/5' /></div>
        <div><label className='text-slate-300 text-sm'>Message</label><textarea name='message' rows='5' required className='w-full mt-1 p-2 rounded bg-white/5 border border-white/5' /></div>
        <div><button className='btn-primary' type='submit'>Send Message</button></div>
        <div className='text-sm text-slate-300'>{status}</div>
      </form>
    </div>
    <div className='glass p-6'>
      <h3 className='font-semibold text-white'>Office</h3>
      <p className='text-slate-300 mt-2'>{siteData.location}</p>
      <h3 className='mt-4 font-semibold text-white'>Follow</h3>
      <p className='text-slate-300 mt-2'>GitHub • LinkedIn • Kaggle</p>
    </div>
  </div>);
}
