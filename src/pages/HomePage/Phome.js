import React,{useState} from 'react'
import { ViewContainer } from '../../components'
import { viewImage } from './Data'
import arrowies from "../../components/View/ViewData";
 
 

const len = arrowies.length - 1;


const Phome = () => {

    const [activeIndex, setActiveIndex] = useState(0); 

    return (
      <>
        
           
          
            <ViewContainer
                   activeIndex={activeIndex}
                 
                   prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                  }
                  nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                  }
                {...viewImage} />
            
           
      </>
      
    )
}

export default Phome
