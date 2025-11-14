import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';
export default function App({ Component, pageProps }){
  return (<>
    <Head>
      <title>AIML Academy — AIML Professional Certification</title>
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <meta name='description' content='AIML Professional Certification Program by Gopal Marmat' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
    </Head>
    <Layout><Component {...pageProps} /></Layout>
  </>);
}
