import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <div className='reports'>
     
      <div id="testimonials">
      <div id="group6">
        <h4 className="testimonials-h4">What our customer are saying</h4>
        <p className="testimonials-"></p>
        <p className="testimonials_p">
          “Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely”
        </p>
        <div className="edward-group">
          <img src="./images/Mask Group.png" alt="" id="edward-img" />
      
        <div className="edward-con"><h6 className="edward">Edward Newgate</h6>
        <p className="cicle">Founder Circle</p></div>
        </div>
      </div>
      <img src="./images/element.svg" alt="" className="left" />
      <img src="./images/element.svg" alt="" className="right" />
    </div>
   
    
    </div>
  );
}

export default Testimonials;