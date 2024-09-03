import React, { memo } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "./pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  window.scrollTo(0, 0);

  return (
    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      maxWidth={350}
      onPageChange={onPageChange}
    />
  );
};

export default memo(Pagination);
