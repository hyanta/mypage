import React from "react";
import { Link } from "react-scroll";
import arrowies from "./ViewData";

const Arrows = (props) => {
  return arrowies.map((slide,index) => (
    <div
          key={index}
          
          className={
           
        index === props.activeIndex ? "view__top__button_wrap" : "inactive"
      }
    >
          <a
            onClick={props.prevSlide}
              href={slide.url} className='view__top__button_wrap__view_prev'>
        이전포폴
      </a>
          <span
              onClick={props.nextSlide}
              href={slide.url} className='view__top__button_wrap__view_next'>
        다음포폴
      </span>
    </div>
  ));
};

export default Arrows;
