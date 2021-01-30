import React from "react";
import { InfoSection, Navbar, SecondInfo, ThirdInfo } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

const Home = () => {
  return (
    <>
      <Navbar />
      <InfoSection  {...homeObjOne} />
      <SecondInfo {...homeObjTwo} />
      <ThirdInfo  {...homeObjThree} />
    </>
  );
};

export default Home;
