export default function handler(req,res){
  if(req.method==='POST'){
    console.log('Contact form:', req.body);
    return res.status(200).json({ok:true, message:'received'});
  }
  res.status(405).end();
}
