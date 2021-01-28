import styled from "styled-components";
import background from '../../images/bg_vod_cover.png'

export const BgContainer = styled.div`
     
`


export const BgVideo = styled.div`
  object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background-color:rgba(47,42,36);
`
export const Video = styled.video`
   
`

export const BgVCover = styled.span`
        display: block;
    width: 100%;
    height: 1170px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -0;
    background-image: url(${background});
    opacity: 0.4;
`
