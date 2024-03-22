import React from 'react'
import w1 from '../assets/images/w1.png';
import w2 from "../assets/images/w2.png";
import w3 from "../assets/images/w3.png";


export default function Project() {
  const images = [
    { id: 1, img1: w1 },
    { id: 2, img1: w2 },
    { id: 3, img1: w3 },
    { id: 4, img1: w1 },
    { id: 5, img1: w2 },
    { id: 6, img1: w3 }
  ];
  return (
    <div className="webs">
      <div className="container">
        {images.map((imgs) => {
          return (
            <div className="box-img">
              <img key={imgs.id} src={imgs.img1} alt="img1" />;
              <div className="overlay">
                <div className="text">
                  <h4>Business Startup</h4>
                  <p>Design & Development</p>
                </div>
              </div>
            </div>
          );
       })}
      </div>
    </div>
  );
}
