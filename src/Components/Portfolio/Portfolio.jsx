import React, { useState } from 'react';
import img1 from '../imgs/poert1.png';
import img2 from '../imgs/port2.png';
import img3 from '../imgs/port3.png';

const Portfolio = () => {
  const images = [img1, img2, img3, img1, img2, img3];
  const [selectedImg, setSelectedImg] = useState(null); 

  return (
    <>
      <div className='Portfolio p-5'>
        <h1 className='fw-bolder'>PORTFOLIO COMPONENT</h1>
        <div className="star">
          <i className="fa-solid fa-star fs-4 fw-bolder"></i>
        </div>

        <div className="container mt-3">
          <div className="row g-5">
            {images.map((img) => ( 
              <div className="col-md-4">
                <div className="inner position-relative">
                  <img
                  onClick={() => {
                  console.log("Clicked:", img);
                  setSelectedImg(img);
                   }}

                    className="w-100 rounded-3"
                    src={img}
                    alt="portfolio"
                  />
                  <div className="overlay d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                    <i className="plus fa-solid fa-plus fw-bolder text-white"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImg ? (
          <div className=" imgPopUp mt-4" onClick={()=>setSelectedImg(null)}>
            <img className="w-50" src={selectedImg} alt="Selected" />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Portfolio;
