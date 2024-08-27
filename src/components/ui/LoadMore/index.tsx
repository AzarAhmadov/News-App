import React from "react";
import Button from "../Button";
import { TypeLoadMore } from "../../../types/types";

const LoadMore: React.FC<TypeLoadMore> = ({ handlePage }) => {
  return (
    <div className="flex justify-center pt-3 pb-5">
      <Button
        onClick={() => handlePage()}
        size="lg"
        type="black"
        outline={true}
        rounded={true}
      >
        Load More
      </Button>
    </div>
  );
};

export default LoadMore;
