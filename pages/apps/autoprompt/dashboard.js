import {useState} from 'react'
export default function Dashboard(){
  const [prompt,setPrompt]=useState('Write a short caption about growth.');
  const [out,setOut]=useState('Demo AI output: Replace DEMO_KEY with a real key.');
  async function gen(){
    const r = await fetch('/api/generate',{method:'POST', body: JSON.stringify({prompt})});
    const j = await r.json(); setOut(j.text||'No output');
  }
  return (
    <div className='min-h-screen bg-slate-900 p-8'>
      <header className='flex items-center justify-between mb-6'><div><h1 className='text-2xl'>AutoPrompt AI — Dashboard</h1></div><a className='btn' href='/'>All apps</a></header>
      <div className='grid md:grid-cols-3 gap-6 mt-6'>
        <div className='card md:col-span-2'>
          <textarea className='w-full p-3 rounded' value={prompt} onChange={e=>setPrompt(e.target.value)}></textarea>
          <button className='btn mt-3' onClick={gen}>Generate (Demo)</button>
          <pre className='mt-4 p-3 bg-slate-800 rounded'>{out}</pre>
        </div>
        <div className='card'>
          <img src='/public/screenshots/autoprompt.png' className='rounded' />
        </div>
      </div>
    </div>
  )
}
