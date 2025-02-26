import React from "react";
import { Slider } from "../../components/Slider/Slider";
import { BlockProducts } from "../../components/BlockProducts/BlockProducts";
import { data_1, data_2, dataInfo_1, title_1, title_2, titleInfo_1 } from "./data";
import { BlockInfo } from "../../components/BlockInfo/BlockInfo";

const Home = () => {
  return (
    <>
      <Slider />
      <BlockProducts data={data_1} title={title_1}/>
      <BlockProducts data={data_2} title={title_2}/>
      <BlockInfo data={dataInfo_1} title={titleInfo_1}/>
    </>
  );
};

export default Home;
