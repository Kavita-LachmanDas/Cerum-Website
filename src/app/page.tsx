import Head from 'next/head';

import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Spinner from './components/Spinner';
import MainContent from './components/MainContent';
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>🦋GoodHabit🦋</title>
        <link rel="stylesheet" href="/styles.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </Head>

     <Header/>
      <LoginForm />
      <Spinner />
      <MainContent />
       <Footer />
    </div>
  );
}
