import React from "react";
import { Link } from "react-scroll";
import arrowies from '../../pages/HomePage/Data'

const Arrows = (props) => {
    return (
      
    arrowies.map((url)=>(  <div className='view__top__button_wrap'>
      <Link to={url} className='view__top__button_wrap__view_prev'>
        이전포폴
      </Link>
      <Link to={url} className='view__top__button_wrap__view_next'>
        다음포폴
      </Link>
    </div>))
  
  );
};

export default Arrows;
