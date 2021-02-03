import React,{useState} from 'react'
import { ViewContainer, ViewNavbar } from '../../components'
import { viewImage } from './Data'
import arrowies from "../../components/View/ViewData";
import Arrows from '../../components/View/Arrows';

const len = arrowies.length - 1;


const Phome = () => {

    const [activeIndex, setActiveIndex] = useState(0); 

    return (
        <>
            <ViewNavbar />
            

            <ViewContainer
                   activeIndex={activeIndex}
                 
                   prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                  }
                  nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                  }
                {...viewImage} />
              {/* <Arrows
              prevSlide={() =>
                setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
              }
              nextSlide={() =>
                setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
              }
            /> */}
        
      </>
      
    )
}

export default Phome
