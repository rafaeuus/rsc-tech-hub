import React from "react";
import { StyledLoadingDots } from "./style";
import { TbLoaderQuarter } from "react-icons/tb";

const LoadingDots = () => {
  return (
    <StyledLoadingDots>
      <h2>
        <TbLoaderQuarter className="icon-dots" />
      </h2>
    </StyledLoadingDots>
  );
};

export default LoadingDots;
