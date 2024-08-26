import React from "react";
import { useSearchParams } from "react-router-dom";
import { useFetchNewsByCategory } from "../../../hooks/useFetch";
import NewsBlockItem from "../NewsBlock/NewsBlockItem/NewsBlockItem";
import ErrorMsg from "../../ui/ErrorMsg";
import Spinner from "../../ui/Spinner";

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [data, loading] = useFetchNewsByCategory(category);

  if (loading) {
    return <Spinner />;
  }

  if (data.length === 0) {
    return <ErrorMsg text="Axtarığınız kateqoriya mövcud deyil..." />;
  }

  return (
    <div className="grid grid-cols-3 gap-3 py-5">
      {data?.map((item: any, index: number) => (
        <NewsBlockItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Search;
