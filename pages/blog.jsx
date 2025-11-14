export default function Blog(){
  const posts = [
    {title:'Understanding Transformers', excerpt:'A concise primer on transformer architecture and attention.'},
    {title:'Best practices for model training', excerpt:'Tips to stabilize training and improve generalization.'},
    {title:'Data cleaning checklist', excerpt:'Common pitfalls and how to fix them.'}
  ];
  return (<div>
    <h2 className='text-2xl font-bold text-white mb-3'>Blog</h2>
    <p className='text-slate-300 mb-4'>Articles, tutorials and paper summaries.</p>
    <div className='grid md:grid-cols-3 gap-4'>
      {posts.map((p,i)=>(
        <div key={i} className='glass p-4'>
          <h3 className='font-semibold text-white'>{p.title}</h3>
          <p className='text-slate-300 mt-2 text-sm'>{p.excerpt}</p>
        </div>
      ))}
    </div>
  </div>);
}
