import React,{useState, useEffect} from 'react'
import SliderContent from './SliderContent';
import sliderImage from "../../pages/HomePage/Data";
import "./slider.css";

// const len = sliderImage.length - 1;




const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0)

     

    return (
        <div className='slider-container'>
            <SliderContent activeIndex={activeIndex} />
            

           
        </div>
    )
}

export default Slider
