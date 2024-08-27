import classNames from "classnames";
import React from "react";
import "./skeleton.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoading: React.FC<any> = ({
  count,
  type,
  width,
  height,
  rounded = false,
}) => {
  const RenderSkeleton = () => {
    if (type === "navbar")
      return (
        <Skeleton
          className={classNames({ "mb-4": true, "!rounded-r-full": rounded }, [
            `skeleton-${width}`,
            `skeleton-h-${height} `,
          ])}
          count={count}
        />
      );
  };

  return <>{RenderSkeleton()}</>;
};

export default SkeletonLoading;
