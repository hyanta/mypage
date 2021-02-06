import React from "react";
 
import "./Company.scss";

const Company = () => {
  return (
    <>
     
    <div className='wrapper'>
      <div className='wrapper__container_wr'>
        <div className='wrapper__container_wr__sub_wrap'>
            <div className='wrapper__container_wr__sub_wrap__sub_title'>
              <h2>
                HELLO!
                </h2>
              <p>이 페이지는 전 회사의 작업이 들어 있습니다.</p>
          </div>
          <div className='wrapper__container_wr__sub_wrap__sub_tap'>
            <a href='/'>ABOUT</a>
            <a href='/'>CONTACT</a>
          </div>
          <div className='wrapper__container_wr__sub_wrap__sub_container'>
            <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec'>
              <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__com_sec_parah'>
                <p className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__com_sec_parah__big_p'>
                  <span className='color_mint'>
                    pop작업, 배너 작업 등<b>웹 디자인 전반적인 작업을 했습니다</b>
                  </span>
                  
                  <br />
                  웹에서는 제가 생각하는 것 보다 더 자유로웠습니다.
                </p>
                <p className= 'wrapper__container_wr__sub_wrap__sub_container__sub_sec__pp'>
                디자인을 하다가 html, css 등을 접하게 되었는데 거기서 신세계를 경험하게 되었습니다.
                </p>
                <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__com_sec_parah__com_sec_log'>
                  <img
                    src='http://maroocorp.co.kr/theme/basic/img/newbird/sub/about_logo.png'
                    alt='로고이미지'
                  />
                </div>
                <p className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__com_sec_parah__wide_lh'>
                 
                  이 분야는 끝없이 발전하기 때문에 자기 공부를 게을리 하면 안됩니다.
                  <br />
                  <span className='color_black'>
                    웹 쪽은 아직도 발전하고 있고 아직도 수요가 여러 분야에 발생하고 있고
                     
                  </span>
                  끝없이 개발하고 발전해야 합니다.
                  <br />
                 저는 
                  <b className='color_mint'>
                    
공부하면 할 수록 배울게 많아지지만 늘 최선을  
                  </b>
                  다 하고 있습니다.
                </p>
              </div>
            </div>
            <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec'>
              <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__title'>
                <h3>About Me</h3>
              </div>
              <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__com_circle_wrap'>
                <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__com_circle_wrap__com_circle com_circle01'>
                  <img
                    className='icon_area'
                    src='http://maroocorp.co.kr/theme/basic/img/newbird/sub/about_icon01.png'
                    alt=''
                  />
                  <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__com_circle_wrap__com_circle__txt_area'>
                    <p>
                      책임감과 성실성
                      <br />
                      하는 일은 끝까지 하려고 하고
                      <br />
                        그것이 결과로써 이어질 수 있게 합니다.
                    </p>
                  </div>
                </div>
                <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__com_circle_wrap__com_circle com_circle02'>
                  <img
                    className='icon_area'
                    src='http://maroocorp.co.kr/theme/basic/img/newbird/sub/about_icon02.png'
                    alt=''
                  /> 
                  <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__com_circle_wrap__com_circle__txt_area'>
                    <p>
                      언제나 도전
                      <br />
                     모르는 것에 두려워 하지 않고 
                      <br />
                      욕심 있게 새로운것을 탐합니다
                    </p>
                  </div>
                </div>
                <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__com_circle_wrap__com_circle com_circle03'>
                  <img
                    className='icon_area'
                    src='http://maroocorp.co.kr/theme/basic/img/newbird/sub/about_icon03.png'
                    alt=''
                  />
                  <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__com_circle_wrap__com_circle__txt_area'>
                    <p>
                      소확행
                      <br />
                      작은 성취감도 가볍게 여기지 않고
                      <br />
                        큰 일을 위한 버팀목으로 삼습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  );
};

export default Company;
