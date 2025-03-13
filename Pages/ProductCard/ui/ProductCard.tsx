import React from "react";
import { BreadCrumbs } from "../../../Features/BreadCrumbs/BreadCrumbs";
import { ProductContainer } from "../local-widgets/ProductContainer/ProductContainer";
import { DetailsAndDescription } from "../local-widgets/DetailsAndDescription/DetailsAndDescription";

const ProductCard = () => {
  return (
    <>
      <BreadCrumbs />
      <ProductContainer />
      <DetailsAndDescription />
    </>
  );
};

export default ProductCard;
