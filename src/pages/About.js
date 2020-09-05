import React from 'react';
import './About.css';
import { FaImages } from 'react-icons/fa';

function About() {
  return (
    <div className='about'>
   <div id="lates_article">
      <h4 className="lates_article-h4">Check out our latest article</h4>
      <p className="lates_article-"></p>
    </div>
    <img src="./images/element-article.png" alt="" id="article-img-left" />
      <img src="./images/Vector-article.png" alt="" id="article-img-right" />
    <div id="article">
  
      <div className="article1 art">
        <img src="./images/image 2-article1.png" alt="" srcset="" />
        <h5>Disease detection, check up in the laboratory</h5>
        <p>
          In this case, the role of the health laboratory is very important to
          do a disease detection...
        </p>
        <a href="" target="_blank" className="read">
          read more<img src="./images/Vector.svg" id="ok1" alt="" />
        </a>
      </div>
      <div className="article2 art">
        <img src="./images/image 2-article2.png" alt="" srcset="" />
        <h5>Herbal medicines that are safe for consumption</h5>
        <p>
          Herbal medicine is very widely used at this time because of its very
          good for your health...
        </p>
        <a href="" target="_blank" className="read">
          read more<img src="./images/Vector.svg" id="ok2"alt="" />
        </a>
      </div>
      <div className="article3 art">
        <img src="./images/image 3-article3.png" alt="" />
        <h5>Natural care for healthy facial skin</h5>
        <p>
          A healthy lifestyle should start from now and also for your skin
          health. There are some...
        </p>
        <a href="" target="_blank" className="read">
          read more<img src="./images/Vector.svg"  id="ok3" alt="" />
        </a>
      </div>
      
    </div>
    <button id="article-btn">View all</button>
    </div>
  );
}

export default About;
