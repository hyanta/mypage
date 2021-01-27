import React from "react";
import { BgVideo, Video, BgContainer,BgVCover } from "./BgElements";
import video from '../../video/Girl.mp4'

const Bg = ( ) => {
    return (
      <BgContainer>
    <BgVideo>
      <Video
        autoPlay
        loop
        muted
        src={
           video
        }
        type='video/mp4'
                ></Video>
                  <BgVCover ></BgVCover>
            </BgVideo>
          
            </BgContainer>
  );
};

export default Bg;
