import React from "react";
import "./ViewContainer.scss";
import viewImage  from "../../pages/HomePage/Data";

  


const ViewContainer = (props,img) => {
        
    return (
       


    <div className='view'>
      <div className='view__container'>
        {/* 뷰 상단 */}
        <div className='view__top'>
          <div className='view__top__personal_color'></div>
          <p>firstname</p>
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
                <li>
                  <a href='/'>Profile</a>
                </li>
                <li>
                  <a href='/'>Filmography</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='view__field'>
            {/* 이름 정보란 */}
            <div className='view__field__top_info'>
              <div className='view__field__top_info__dob'>
                <p>
                  이름이
                  <span>1997.04.25</span>
                </p>
                <span className='view__field__top_info__dob__cat'>ACTORS</span>
              </div>
            </div>
                      <div className='view__field__tap_pc'>
                          <div className='view__field__tap_pc__profile'>
                                <div className='view__field__tap_pc__profile__section'>
                                    <h3 className='view__field__tap_pc__profile__section__section_title'>ABOUT</h3>
                                  <div className='view__field__tap_pc__profile__section__con_box'>
                                      <img src={viewImage.img} alt='none' className='view__field__tap_pc__profile__section__con_box__p'/> 
                                    </div>
                                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewContainer;
