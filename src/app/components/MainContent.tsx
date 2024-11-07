'use client'
import Image from 'next/image';

import Header from './Header';
import Footer from './Footer';
import App from './Slider';
import Card from './Card';
import Card2 from './Card2';
import Card3 from './Card3';

const MainContent = () => {
  return (
    <div id="main-content">
      <Header />
      <main>
        <section className="hero">
       
          <Image src='/main.avif' alt='hi' width={300} height={300}></Image>
          <div className="hero-text ">
            <h2 className='text-white font-serif text-[30px]'>Welcome to My Website</h2>
            <p className='text-white font-serif'>Explore our services and learn more about what we offer.</p>
          </div>

        </section>
      

   <div className="card w-[400px] p-5 text-center">
    <h1 className='text-black font-serif text-[25px]'> Our Serivices</h1>
    <p className='text-black '>We offer a wide range of services to meet your needs. From skin care to salon services, we&apos;ve got you covered.</p>
   </div>














<Card/>
















  <Card2/>
    {/* /////swipper */}
<App/>
<Card3/>

      </main>
      <Footer />
    </div>
  );
};

export default MainContent;
