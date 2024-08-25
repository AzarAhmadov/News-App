import { useEffect, useState } from "react";
import { API } from "../utils/api";
import NewsApi from "../api/news.api";

const useFetch = <T,>(initialState: T) => {
  const [data, setData] = useState<T>(initialState);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (url: string, params: object = {}): Promise<void> => {
    try {
      setLoading(true);
      const res = await API.get<T>(url, { params });
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return [data, fetchData, loading] as const;
};

export const useFetchCategories = () => {
  const [data, fetchData, loading] = useFetch<any[]>([]);

  useEffect(() => {
    fetchData(NewsApi.categories);
  }, [fetchData]);

  return [data, loading] as const;
};

export const useFetchAllNews = () => {
  const [data, fetchData, loading] = useFetch<any[]>([]);

  useEffect(() => {
    fetchData(NewsApi.all, { limit: 5 });
  }, [fetchData]);

  return [data, loading] as const;
};
