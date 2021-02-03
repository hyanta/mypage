import React, { useState } from "react";
import { viewImage } from "../../pages/HomePage/Data";
import arrowies from "./ViewData";
import "./ViewContainer.scss";
import Arrows from "./Arrows";
 
 

const ViewContainer = (props) => {
  const [toggleState, setToggleState] = useState(1);
   
   

  const ToggleTap = (index) => {
    setToggleState(index);
  };

    return (
      arrowies.map((slide,index) => (


        <div
          key={index}
          className={index === props.activeIndex ? "view" : 'inactive'}>
      <div className='view__container'>
        {/* 뷰 상단 */}
        <div className='view__top'>
          <div className='view__top__personal_color'></div>
            <p>{slide.firstname}</p>
              {/* <div
                key={index}
               
                className={index === props.activeIndex ? "view__top__button_wrap" : "inactive"}>
              <span
                  href={slide.url}
                  onClick={props.prevSlide}
                className='view__top__button_wrap__view_prev'>이전포폴</span>
                <span href={slide.url}
                   onClick={props.nextSlide}
                  className='view__top__button_wrap__view_next'>다음포폴</span>
            </div> */}
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
        </div>
        {/* 뷰 하단 */}
        <div className='view__bottom'>
          <div className='view__bottom__circle_img'>
                          <img src='http://maroocorp.co.kr/img/maru/1595489907_41228.jpg' alt='none' />
                           
          </div>
          <div className='view__bottom__wrap'>
            {/* pc버전 텝메뉴 */}
            <div className='view__bottom__wrap__view_tap'>
              <ul>
                  <li
                 
                  >
                    <span
                                   className={toggleState === 1 ? 'active' : ''}
                                   onClick={()=> ToggleTap(1)}      
                    >{slide.profile}</span>
                </li>
                <li>
                    <span href='/'
                    className={toggleState === 2 ? 'active' : ''}
                    onClick={()=> ToggleTap(2)}  
                    >{slide.filmography}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='view__field'>
            {/* 이름 정보란 */}
            <div className='view__field__top_info'>
              <div className='view__field__top_info__dob'>
                <p>
                  {slide.subname}
                  <span>{slide.date}</span>
                </p>
                <span className='view__field__top_info__dob__cat'>ACTORS</span>
              </div>
            </div>
                      <div className='view__field__tap_pc'>
                          <div className='view__field__tap_pc__profile'>
                               
                    {/* ABOUT 토글 */}
                    <div
                       className={toggleState === 1 ? "view__field__tap_pc__profile__section" : "inactive"}
                      >
                                    <h3 className='view__field__tap_pc__profile__section__section_title'>ABOUT</h3>
                      <div
                        className={index === 1 ? "view__field__tap_pc__profile__section__con_box" : "inactive"}>
                       
                      
                          <img
                           
                          src={slide.img1} alt='none' className='view__field__tap_pc__profile__section__con_box__p' />
                            <img
                           
                           src={slide.img2} alt='none' className='view__field__tap_pc__profile__section__con_box__p' />
                       
                       <img
                           
                           src={slide.img3} alt='none' className='view__field__tap_pc__profile__section__con_box__p' />
                      </div>

                      <div
                        className={index === 2 ? "view__field__tap_pc__profile__section__con_box" : "inactive"}>
                       
                      
                          <img
                           
                          src={slide.img1} alt='none' className='view__field__tap_pc__profile__section__con_box__p' />
                            <img
                           
                           src={slide.img2} alt='none' className='view__field__tap_pc__profile__section__con_box__p' />
                       
                     
                      </div>

                    </div>
                    

                
              
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
         ))
  );
};

export default ViewContainer;
