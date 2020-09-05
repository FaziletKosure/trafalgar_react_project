import React from 'react';
import './Home.css';
import FindDoctor from './FindDoctor';
import Apps from './Apps';
import Testimonials from './Testimonials';
import Footer from './Footer';
import About from './About';

function Home() {
  return (
    <div className='home'>
      <div id="virtual">
      <div id="dots"><img src="./images/element.svg" alt="" width="150" /></div>
     
        <section className="header-text">
          <h5 className="header-text-h5">Virtual healthcare for you</h5>
          <p className="header-text-p">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
        
        
           
          <button id="header-btn">Consult today</button>
          
        </section>
        
        <section className="illustration">
          <img
            id=" trafalgar-header-illustration1"
            src="./images/trafalgar-header illustration 1tarfalger-header.png"
            alt="tarfalger-header" width='400'
          />
        </section>
      </div>
     <FindDoctor/>
     <Apps/>
     <Testimonials/>
     <About/>
     <Footer/>
     

  
    </div>
      
  );
}

export default Home;