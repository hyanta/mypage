import React from "react";

const company = () => {
  return (
    <div className='wrapper'>
      <div className='wrapper__container_wr'>
        <div className='wrapper__container_wr__sub_wrap'>
          <div className='wrapper__container_wr__sub_wrap__sub_title'></div>
          <div className='wrapper__container_wr__sub_wrap__sub_tap'>
            <a href='/'>ABOUT</a>
            <a href='/'>CONTACT</a>
          </div>
          <div className='wrapper__container_wr__sub_wrap__sub_container'>
            <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec'>
              <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__com_sec_parah'>
                <p className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__com_sec_parah__big_p'>
                  <span className='color_mint'>
                    음악, 영화, 드라마, 공연 등<b>엔터테인먼트</b>
                  </span>
                  의
                  <br />
                  모든 영역으로의 사업 확장을 하고 있으며
                </p>
                <p>
                  글로벌 시대에 발맞추어 해외 비즈니스 역량 강화로 콘텐츠 수출에
                  앞장서고 있습니다.
                </p>
                <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__com_sec_parah__com_sec_log'>
                  <img
                    src='http://maroocorp.co.kr/theme/basic/img/newbird/sub/about_logo.png'
                    alt='로고이미지'
                  />
                </div>
                <p className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__com_sec_parah__wide_lh'>
                  최고의 전문가들이 모여 풍부한 제작 및 관리 경험과 네트워크를
                  이용,
                  <br />
                  <span className='color_black'>
                    차별화되고 최고의 실력을 갖춘 아티스트 개발에 중점 및
                    아시아를 넘어 세계를 아우를 수 있는 컨텐츠 개발에 매진
                  </span>
                  하고 있습니다.
                  <br />
                  마루기획 주식회사는
                  <b className='color_mint'>
                    뉴미디어를 선두 할 수 있는 초일류 종합 엔터테인먼트사를 지향
                  </b>
                  합니다.
                </p>
              </div>
            </div>
            <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec'>
              <div className='wrapper__container_wr__sub_wrap__sub_container__sub_sec__title'>
                <h3>주요 산업 분야</h3>
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
                      음반 제작 및 온라인
                      <br />
                      오프라인 음반 유통, 투자
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
                      스타 매니지먼트 및
                      <br />
                      스타 마케팅
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
                      영화, 드라마 제작 및
                      <br />
                      투자
                    </p>
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

export default company;
