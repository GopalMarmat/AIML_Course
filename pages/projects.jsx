import ProjectCard from '../components/ProjectCard';
const exampleProjects = [
  { title: 'Credit Risk Prediction', description: 'Predict loan default using tabular data with feature engineering and ensemble models.', tech: 'Pandas, Scikit-learn, XGBoost', demo: ''},
  { title: 'Image Recognition', description: 'Transfer learning-based CNN image classifier with augmentation.', tech: 'TensorFlow, Keras', demo: ''},
  { title: 'Text Summarizer', description: 'Abstractive summarization using transformers and fine-tuning.', tech: 'Hugging Face', demo: ''}
];
export default function Projects(){ return (<div>
  <h2 className='text-2xl font-bold text-white mb-3'>Projects</h2>
  <p className='text-slate-300 mb-4'>Capstone and example projects aligned with the curriculum.</p>
  <div className='card-grid'>{exampleProjects.map((p,i)=>(<ProjectCard key={i} project={p}/>))}</div>
</div>); }
