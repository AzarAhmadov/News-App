import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoading: React.FC<any> = ({ count, height }) => {
  return <Skeleton count={count} height={height} />;
};

export default SkeletonLoading;
