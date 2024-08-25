import React from "react";
import { useSearchParams } from "react-router-dom";

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return <div>Search | {category}</div>;
};

export default Search;
