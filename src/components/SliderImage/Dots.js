import React from "react";
import sliderImage from "../../pages/HomePage/Data";

const Dots = (props) => {
  return (
    <div className='all-dots'>
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`  ${
            props.activeIndex === index ? "dot active-dot" : "dot"
          }`}
          onClick={(e) => props.onclick((e.target.value = index))}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
