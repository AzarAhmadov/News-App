import classNames from "classnames";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkeletonLoadProps {
  className?: string;
  count: number;
}

const SkeletonLoad: React.FC<SkeletonLoadProps> = ({ className, count }) => {
  return <Skeleton count={count} className={classNames(className)} />;
};

export default SkeletonLoad;
