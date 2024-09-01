import React from "react";
import { CiGift } from "react-icons/ci";
import Button from "../Button";

const Subscribe: React.FC = () => {
  return (
    <div className="ms-5 h-[120px] rounded-md bg-primary p-5">
      <div className="flex items-center gap-x-3">
        <CiGift className="shrink-0 text-[28px] text-textWhite" />
        <h3 className="text-sm font-normal text-textWhite">
          Subscribe to Premium
        </h3>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="text-[1.7rem] font-bold text-white">
          $8<small className="text-[1rem] font-normal">/m</small>
        </div>
        <Button type="button" variant="primaryDarker" size="sm" rounded={true}>
          Upgrate
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
