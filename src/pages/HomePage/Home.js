import React from "react";
import { InfoSection, Navbar, SecondInfo, Sidebar, ThirdInfo } from "../../components";
import Bg   from '../../components/BgVideo/Bg'
import { homeObjOne, homeObjTwo, homeObjThree, SidebarName } from "./Data";

const Home = () => {
  return (
    <>
      {/* <Sidebar {...SidebarName} /> */}
      <Bg />
      <Navbar />
      <InfoSection  {...homeObjOne} />
      <SecondInfo {...homeObjTwo} />
      <ThirdInfo  {...homeObjThree} />
    </>
  );
};

export default Home;
