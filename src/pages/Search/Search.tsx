import React from "react";
import { useSearchParams } from "react-router-dom";
import { useFetchNewsByCategory } from "../../hooks/useFetch";
import Spinner from "../../components/ui/Spinner";
import ErrorMsg from "../../components/ui/ErrorMsg";
import NewsBlockItem from "../../components/share/NewsBlock/NewsBlockItem/NewsBlockItem";

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [data, loading] = useFetchNewsByCategory(category);

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
      <div className="grid grid-cols-3 gap-3 py-5">
        {data?.map((item: any, index: number) => (
          <NewsBlockItem item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default Search;
