import React from "react";
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
      <div className="w-full h-full skeleton-bg"></div>
    </div>
  );
};

export default SkeletonLoad;
