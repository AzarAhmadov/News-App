import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetchNewsByCategory } from "../../hooks/useFetch";
import Spinner from "../../components/ui/Spinner";
import ErrorMsg from "../../components/ui/ErrorMsg";
import NewsBlockItem from "../../components/share/NewsBlock/NewsBlockItem/NewsBlockItem";
import Pagination from "../../components/ui/Pagination";

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, loading] = useFetchNewsByCategory(category, currentPage, 9);
  const totalPages = 5;

  if (loading) {
    return <Spinner />;
  }

  if (data.length === 0) {
    return (
      <ErrorMsg text="The category you are looking for is not available..." />
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-3 py-5 md:grid-cols-2 xl:grid-cols-3">
        {data?.map((item: any, index: number) => (
          <NewsBlockItem item={item} key={index} />
        ))}
      </div>

      <div className="pt-4 pb-7">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Search;
