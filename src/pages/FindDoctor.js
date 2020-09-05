import React from 'react';
import './FindDoctor.css';
import { FaImages } from 'react-icons/fa';

function FindDoctor() {
  return (
    <div className='products'>
      <div id="our-services">
      <div className="text">
        <h3 className="text-h3">Our services</h3>
        <img
          src="./images/Rectangle 2.png"
          alt="rectangle"
          class="text-rectangle-2"
        />
        <p className="text-p">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>
      <div id="services">
        {/* <img src="./images/Frame1.png" alt="" className="frame1-vector" />
        <img src="./images/element.svg" alt="" className="element1-vector" /> */}
        <div id="search-doctor">
          <div className="grup-3">
            <img
              src="./images/Frame-search.png"
              alt="frame"
              id="search-doctor-img"
            />

            <h4 className="search-doctor-h4">Search doctor</h4>
            <p className="search-doctor-p">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
        </div>
        <div id="Online-pharmacy">
          <div className="grup-3">
            <img
              src="./images/Group-pharmacy.png"
              alt="frame"
              id="Online-pharmacy-img"
            />
            <h4 className="Online-pharmacy-h4">Online pharmacy</h4>
            <p className="Online-pharmacy-p">
              Buy your medicines with our mobile application with a simple
              delivery system
            </p>
          </div>
        </div>
        <div id="Consultation">
          <div className="grup-3">
            <img
              src="./images/Frame-consultotion.png"
              alt="frame"
              id="Consultation-img"
            />
            <h4 className="Consultation-h4">Consultation</h4>
            <p className="consultation-p">
              Free consultation with our trusted doctors and get the best
              recomendations
            </p>
          </div>
        </div>
        <div id="Details-info">
          <div className="grup-3">
            <img
              src="./images/Frame-Details-info.png"
              alt="frame"
              id="Details-info-img"
            />
            <h4 className="Details-info-h4">Details info</h4>
            <p className="Details-info-p">
              Free consultation with our trusted doctors and get the best
              recomendations
            </p>
          </div>
        </div>
        <div id="emergency-care">
          <div className="grup-3">
            <img src="./images/Frame.png" alt="frame" id="frame" />
            <h4 className="emergency-h4">Emergency care</h4>
            <p className="consultation-p">
              You can get 24/7 urgent care for yourself or your children and
              your lovely family
            </p>
          </div>
        </div>
        <div id="Tracking">
          <div className="grup-3">
            <img
              src="../images/Group-tracking.png"
              alt="frame"
              id="Tracking-img"
            />
            <h4 className="Tracking-h4">Tracking</h4>
            <p className="Tracking-p">
              Track and save your medical history and health data
            </p>
          </div>
        </div>
      </div>
      <button id="services-btn">Learn more</button>
    </div>
    </div>
  );
}

export default FindDoctor;