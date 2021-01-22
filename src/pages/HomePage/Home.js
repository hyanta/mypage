import React from "react";
import { InfoSection, SecondInfo, ThirdInfo } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <SecondInfo {...homeObjTwo} />
      <ThirdInfo {...homeObjThree} />
    </>
  );
};

export default Home;
