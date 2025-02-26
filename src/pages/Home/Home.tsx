import React from "react";
import { Slider } from "../../components/Slider/Slider";
import { BlockInfo } from "../../components/BlockInfo/BlockInfo";
import { data, title } from "./data";

const Home = () => {
  return (
    <>
      <Slider />
      <BlockInfo data={data} title={title} />
      <BlockInfo data={data} title={title}/>
    </>
  );
};

export default Home;
