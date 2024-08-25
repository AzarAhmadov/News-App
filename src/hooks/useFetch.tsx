import { useEffect, useState } from "react";
import { API } from "../utils/api";
import NewsApi from "../api/news.api";
import AuthorApi from "../api/author.api";

const useFetch = (initialState = false) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url: string, params = {}) => {
    try {
      setLoading(true);
      const res: any = await API.get(url, { params });
      setData(res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  return [data, fetchData, loading];
};

export const useFetchCategories = () => {
  const [data, fetchData, loading] = useFetch([]);

  useEffect(() => {
    fetchData(NewsApi.categories);
  }, []);

  return [data, loading];
};

export const useFetchAllNews = () => {
  const [data, fetchData, loading] = useFetch([]);

  useEffect(() => {
    fetchData(NewsApi.all, { limit: 5 });
  }, []);

  return [data, loading];
};

export const useFetchAutors = () => {
  const [data, fetchData, loading] = useFetch<any[]>([]);

  useEffect(() => {
    fetchData(AuthorApi.all);
  }, []);

  return [data, loading] as const;
};
