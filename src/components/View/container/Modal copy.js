import React from "react";
import arrowies from "../ViewData";

const Modal = ({ showModal, setShowModal }) => {
  return arrowies.map((slide, index) => (
    
      showModal ? ( <div key={index} className='background'>
      <div className='background__modal_wrapper' showModal={showModal}>
        <img src={slide.img1} className='background__modal_wrapper__image' alt='no' />
        <div
          onClick={() => setShowModal((prev) => !prev)}
          className='modalcontent'
        >
          <h1>modal</h1>
        </div>
      </div>
      </div>) : null
     

      
  ));
};

export default Modal;
