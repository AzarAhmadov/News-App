import React, { memo } from "react";
import Button from "../Button";
import { TypeLoadMore } from "../../../types/types";

const LoadMore: React.FC<TypeLoadMore> = ({ handlePage }) => {
  return (
    <div className="flex justify-center pb-5 pt-3">
      <Button
        onClick={() => handlePage()}
        size="lg"
        type="button"
        variant="black"
        outline={true}
        rounded={true}
      >
        Load More
      </Button>
    </div>
  );
};

export default memo(LoadMore);
