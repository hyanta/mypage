import React from 'react'
import sliderImage from "../../pages/HomePage/Data";

const SliderContent = (props) => {
    return (
        <section>
            { sliderImage.map(( slide, index ) => (
                <div
                    key={index}
                    className={index === props.activeIndex ? "slides active" : 'inactive'}>
                    <img className='slide-image' img={slide.img} alt='' />
                    <h3 className='slide-title'> { slide.description }  </h3>


                    </div>

            )) }
        </section>
    )
}

export default SliderContent
