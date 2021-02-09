import React, { useState } from "react";
import { viewImage } from "../../pages/HomePage/Data";
import arrowies from "./ViewData";
import "./ViewContainer.scss";
import './ViewContainerMedia.scss'
import Arrows from "./Arrows";
import "../../images/bigBanner01.jpg";
import "../../images/bigBanner02.jpg";
import "../../images/bigBanner03.jpg";
import "../../images/bigBanner04.jpg";
import * as FiIcons from "react-icons/fi";
 
import Modal from "./container/Modal";
const ViewContainer = (props) => {
  const [toggleState, setToggleState] = useState(1);
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const ToggleTap = (index) => {
    setToggleState(index);
  };

  return arrowies.map((slide, index) => (
    <div
      key={index}
      className={index === props.activeIndex ? "view" : "inactive"}
    >
      <div className='view__container'>
        {/* 뷰 상단 */}
        <div
          key={index}
          className={
            index === props.activeIndex ? "   view__top" : "inactive"
             
          }
        >
           <div
          key={index}
          className={
            index === 1 ? "   view__top topa" : "inactive"
          }
        ></div>
        <div
          key={index}
          className={
            index === 2 ? "   view__top topb" : "inactive"
          }
        ></div>
        <div
          key={index}
          className={
            index === 3 ? "  view__top topc" : "inactive"
          }
        ></div>

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
              className='view__top__button_wrap__view_prev'
            >
              <FiIcons.FiArrowLeftCircle />
            </span>
            <span
              onClick={props.nextSlide}
              className='view__top__button_wrap__view_next'
            >
             <FiIcons.FiArrowRightCircle />
            </span>
          </div>
        </div>
       
        {/* 뷰 하단 */}
        <div className='view__bottom'>
          <div className='view__bottom__circle_img'>
            <img
              src={slide.circle}
              alt='none'
            />
          </div>
          <div className='view__bottom__wrap'>
            {/* pc버전 텝메뉴 */}
            <div className='view__bottom__wrap__view_tap'>
              <ul>
                <li>
                  <span
                    className={toggleState === 1 ? "active " : ""}
                    onClick={() => ToggleTap(1)}
                  >
                    {slide.profile}
                  </span>
                </li>
                <li>
                  <span
                    href='/'
                    className={toggleState === 2 ? "active" : ""}
                    onClick={() => ToggleTap(2)}
                  >
                    {slide.filmography}
                  </span>
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
                <span className='view__field__top_info__dob__cat'>
                  {slide.actors}
                </span>
              </div>
            </div>
            <div className='view__field__tap_pc'>
              <div className='view__field__tap_pc__profile'>


         {/* 모바일 텝 */}
   <div className='view__field__view_tabs2'>
              <ul className='view__field__view_tabs2__slider-nav'>
                <div className='view__field__view_tabs2__slider-nav__slick-list'>
                  <div className='view__field__view_tabs2__slider-nav__slick-list__slick-track'>
                    <li className='view__field__view_tabs2__slider-nav__slick-list__slick-track__slick-slide'>
                      <a href='/'>profile</a>
                    </li>
                    <li className='view__field__view_tabs2__slider-nav__slick-list__slick-track__slick-slide'>
                      <a href='/'>profile</a>
                    </li>
                    <li className='view__field__view_tabs2__slider-nav__slick-list__slick-track__slick-slide'>
                      <a href='/'>profile</a>
                     </li>
                  </div>
                </div>
                </ul>

            </div>

                {/* ABOUT 토글 */}
                <div
                  className={
                    toggleState === 1
                      ? "view__field__tap_pc__profile__section"
                      : "inactive"
                  }
                >
                  <h3 className='view__field__tap_pc__profile__section__section_title'>
                    PICTURE
                  </h3>
                  <div
                    className={
                      index === 0
                        ? "view__field__tap_pc__profile__section__con_box"
                        : "inactive"
                    }
                  >
                    <img
                      
                      onClick={openModal}
                      src={slide.img1}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                    {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
                    <img
                      src={slide.img2}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />

                    <img
                      src={slide.img3}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                       <img
                      src={slide.img4}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                        <img
                      src={slide.img5}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
    <img
                      src={slide.img6}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
    <img
                      src={slide.img7}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />

                  </div>

                  <div
                    className={
                      index === 1
                        ? "view__field__tap_pc__profile__section__con_box"
                        : "inactive"
                    }
                  >
                    <img
                      src={slide.img1}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                    <img
                      src={slide.img2}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                     <img
                      src={slide.img3}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                     <img
                      src={slide.img4}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                       <img
                      src={slide.img5}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                       <img
                      src={slide.img6}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                       <img
                      src={slide.img7}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                  </div>

                  <div
                    className={
                      index === 2
                        ? "view__field__tap_pc__profile__section__con_box"
                        : "inactive"
                    }
                  >
                    <img
                      src={slide.img1}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                    <img
                      src={slide.img2}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                     <img
                      src={slide.img3}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                     <img
                      src={slide.img4}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                       <img
                      src={slide.img5}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                       <img
                      src={slide.img6}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                       <img
                      src={slide.img7}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                      <img
                      src={slide.img8}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                  </div>

                  <div
                    className={
                      index === 3
                        ? "view__field__tap_pc__profile__section__con_box"
                        : "inactive"
                    }
                  >
                    <img
                      src={slide.img1}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                    <img
                      src={slide.img2}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                     <img
                      src={slide.img3}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                     <img
                      src={slide.img4}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                       <img
                      src={slide.img5}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                       <img
                      src={slide.img6}
                      alt='none'
                      className='view__field__tap_pc__profile__section__con_box__p'
                    />
                 
                  </div>
             
                
               
                 



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  ));
};

export default ViewContainer;
