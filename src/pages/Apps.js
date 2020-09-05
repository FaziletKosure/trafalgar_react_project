import React from 'react';
import './Apps.css';

function Apps() {
  return (
    <div className='apps'>
      
      <div id="leading-healthcare-providers">
      <section id="trafalgar-illustration-sec02">
        <img src="./images/trafalgar-illustration sec02 1.png" alt="" />
      </section>
      <section id="text-1">
        <h4 className="text1-h4">Leading healthcare providers</h4>
        <p className="text1-p">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>
        <button id="text1-btn">Learn more</button>
      </section>
    </div>
    <div id="download-app">
      <section className="download-text">
        <h4 className="download-text-h4"> Download our mobile apps</h4>
        <p className="download-text-p">
        Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely
        </p>
        <button id="download-text-btn">
          Download
          <img
            src="./images/download.png"
            id="download-icon"
            alt=""
            srcset=""
          />
        </button>
      </section>
      <section id="trafalgar-illustration sec03">
        <img
          src="./images/trafalgar-illustration sec03 1.png"
          id="download-img"
          alt="" height="477"
        />
      </section>
    </div>
    </div>
  );
}

export default Apps;