import React, { memo } from "react";
import classNames from "classnames";
import "./skeletonLoad.css";

interface SkeletonLoadProps {
  className?: string;
}

const SkeletonLoad: React.FC<SkeletonLoadProps> = ({ className }) => {
  return (
    <div
      role="status"
      className={classNames("relative overflow-hidden", className)}
    >
      <div className="skeleton-bg h-full w-full"></div>
    </div>
  );
};

export default memo(SkeletonLoad);
