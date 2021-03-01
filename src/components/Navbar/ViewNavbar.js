import React, { useState, useEffect } from "react";
import {   } from "react-scroll";
import "./ViewNavbar.scss";
import { Link  } from "react-router-dom";
import './ViewNavbarMedia.scss';
import * as AiIcons from "react-icons/ai";

const ViewNavbar = ({logo,nav1,nav2,nav3,nav4}) => {
  const [background, setScrollNav] = useState();
  const [toggleState, setToggleState] = useState(1);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)

  const toggleTab = (index ) => {
    setToggleState(index);
  };

  const changeNav = () => {
    if (window.scrollY >= 90) {
      setScrollNav("#fedaca");
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
          <a href='/view'>
            <img
              src={logo}
              alt='이미지없음'
            />
          </a>
        </div>
        <div className='hd__wrapper__navi_wrap'>
          <ul>
            <li>
              <Link
                className={toggleState === 1 ? "on" : ""}
                onClick={() => toggleTab(1)}
                to='/view/company'
              >
                {nav1}
              </Link>
            </li>
            <li>
              <a
                href='view'
                className={toggleState === 2 ? "on" : ""}
                onClick={() => toggleTab(2)}
               
              >
                {nav2}
              </a>
            </li>
            <li>
              <a
                className={toggleState === 3 ? "on" : ""}
                onClick={() => toggleTab(3)}
                href='/'
              >
                {nav3}
              </a>
            </li>
            <li>
              <a
                className={toggleState === 4 ? "on" : ""}
                onClick={() => toggleTab(4)}
                href='/view'
              >
                {nav4}
              </a>
            </li>
          </ul>
        </div>
        <div className='hd__wrapper__navi_right'>
          <ul>
            <li>
              <a href='/view'>
              <AiIcons.AiOutlineHome />
              </a>
            </li>
            <li>
              <a href='/view'>
              <AiIcons.AiFillGithub />
              </a>
            </li>
            <li className='sch_open'>
              <a href='/view'>
              <AiIcons.AiFillHeart />
              </a>
            </li>
          </ul>
        </div>
        <a onClick={handleClick}  href='#/' className= { click ? 'hd__wrapper__mo_navi_open  cross': 'hd__wrapper__mo_navi_open' } >
          <span className='hd__wrapper__mo_navi_open__first'></span>
          <span className='hd__wrapper__mo_navi_open__second'></span>
          <span className='hd__wrapper__mo_navi_open__third'></span>
        </a>
      </div>
      <div   className= { click ? 'm_navi_wrap move' :  'm_navi_wrap' }   >
        <ul>
          <li>
            <a href='/view/company'>{nav1}</a>
          </li>
          <li>
            <a href='/view'>{nav2}</a>
          </li>
          <li>
            <a href='/'>{nav3}</a>
          </li>
          <li>
            <a href='/view'>{nav4}</a>
          </li>
          
          </ul>
      </div>
    </div>
  );
};

export default ViewNavbar;
