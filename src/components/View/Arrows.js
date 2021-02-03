import React from "react";

const Arrows = (props) => {
  return (
 
    <div className={"view__top__button_wrap"}>
      <span
        onClick={props.prevSlide}
          className='view__top__button_wrap__view_prev'>
        이전포폴
      </span>
      <span
        onClick={props.nextSlide}
         className='view__top__button_wrap__view_next'>
        다음포폴
      </span>
      </div>
     
  )
};

export default Arrows;
//    <div className={'view__toparrow'}
// ></div>