import React, { memo } from "react";
import Button from "../Button";
import { TypeLoadMore } from "../../../types/types";
import { translate } from "../../../helper/helper";
import useWidth from "../../../hooks/useWidth";

const LoadMore: React.FC<TypeLoadMore> = ({ handlePage }) => {
  const width = useWidth();

  return (
    <div className="flex justify-center pt-3 pb-5">
      <Button
        onClick={() => handlePage()}
        size={width > 578 ? "lg" : "md"}
        type="button"
        variant="black"
        outline={true}
        rounded={true}
      >
        {translate("loadMore.text")}
      </Button>
    </div>
  );
};

export default memo(LoadMore);
