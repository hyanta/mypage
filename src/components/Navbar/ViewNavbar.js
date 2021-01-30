import React, { useState, useEffect } from "react";
import "./ViewNavbar.scss";

const ViewNavbar = () => {
  const [background, setScrollNav] = useState();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const changeNav = () => {
    if (window.scrollY >= 90) {
      setScrollNav("#aacfd8");
    } else {
      setScrollNav("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <div style={{ background }} className='hd'>
      <h1 className='hd__h1'>ARTIST</h1>
      <div className='hd__wrapper'>
        <div className='hd__wrapper__logo'>
          <a href='/'>
            <img
              src='http://maroocorp.co.kr/theme/basic/img/newbird/h_logo.png'
              alt='이미지없음'
            />
          </a>
        </div>
        <div className='hd__wrapper__navi_wrap'>
          <ul>
            <li>
              <a
                className={toggleState === 1 ? "on" : ""}
                onClick={() => toggleTab(1)}
                href='/'
              >
                COMPANY
              </a>
            </li>
            <li>
              <a
                className={toggleState === 2 ? "on" : ""}
                onClick={() => toggleTab(2)}
                href='/'
              >
                ARTIST
              </a>
            </li>
            <li>
              <a
                className={toggleState === 3 ? "on" : ""}
                onClick={() => toggleTab(3)}
                href='/'
              >
                NEWS&NOTICE
              </a>
            </li>
            <li>
              <a
                className={toggleState === 4 ? "on" : ""}
                onClick={() => toggleTab(4)}
                href='/'
              >
                AUDITION
              </a>
            </li>
          </ul>
        </div>
        <div className='hd__wrapper__navi_right'>
          <ul>
            <li>
              <a href='/'>
                <img
                  src='http://maroocorp.co.kr/theme/basic/img/newbird/email_icon.png'
                  alt='Email'
                />
              </a>
            </li>
            <li>
              <a href='/'>
                <img
                  src='http://maroocorp.co.kr/theme/basic/img/newbird/email_icon.png'
                  alt='map'
                />
              </a>
            </li>
            <li className='sch_open'>
              <a href='/'>
                <img
                  src='http://maroocorp.co.kr/theme/basic/img/newbird/email_icon.png'
                  alt='serach'
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewNavbar;
