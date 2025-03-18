import React from "react";

import { BlockInfo } from "../../../Widgets/BlockInfo/BlockInfo";
import { data_1, data_2, dataInfo_1, dataInfo_2, title_1, title_2, titleInfo_1, titleInfo_2 } from "../../../Entities/Home/homeData";
import { BlockProducts } from "../../../Widgets/BlockProducts/BlockProducts";
import { Slider } from "../../../Widgets/Slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <BlockProducts data={data_1} title={title_1} />
      <BlockProducts data={data_2} title={title_2} />
      <BlockInfo data={dataInfo_1} title={titleInfo_1} />
      <BlockProducts data={data_2} title={title_2} />
      <BlockInfo data={dataInfo_2} title={titleInfo_2} />
    </>
  );
};

export default Home;
