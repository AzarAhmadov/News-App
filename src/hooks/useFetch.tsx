import { useEffect, useState } from "react";
import { API } from "../utils/api";
import NewsApi from "../api/news.api";
import AuthorApi from "../api/author.api";

const useFetch = (initialState = false) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url: string, params = {}, list = true) => {
    try {
      setLoading(true);
      const res: any = await API.get(url, { params });
      setData(list ? res.data : res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
    finally{
      setLoading(false)
    }
  };

  return [data, fetchData, loading];
};

export const useFetchCategories = () => {
  const [data, fetchData, loading] = useFetch([]);

  useEffect(() => {
    fetchData(NewsApi.categories, {}, false);
  }, []);

  return [data, loading];
};

export const useFetchAllNews = (page: number, limit: number) => {
  const [data, fetchData, loading] = useFetch([]);

  useEffect(() => {
    fetchData(NewsApi.all, { page, limit }, true);
  }, [page, limit]);

  return [data, loading];
};

export const useFetchNewsBySlug = (slug: string) => {
  const [data, fetchData, loading] = useFetch([]);

  useEffect(() => {
    fetchData(NewsApi.bySlug.replace(":slug", slug), {}, false);
  }, []);

  return [data, loading];
};

export const useFetchNewsByCategory = (category: string) => {
  const [data, fetchData, loading] = useFetch([]);

  useEffect(() => {
    fetchData(NewsApi.all, { category }, true);
  }, [category]);

  return [data, loading];
};

export const useFetchAutors = () => {
  const [data, fetchData, loading] = useFetch([]);

  useEffect(() => {
    fetchData(AuthorApi.all, {}, false);
  }, []);

  return [data, loading];
};

export const useFetchAuthorBySlug = (slug: string) => {
  const [data, fetchData, loading] = useFetch();

  useEffect(() => {
    fetchData(AuthorApi.bySlug.replace(":slug", slug), {}, false);
  }, []);

  return [data, loading];
};

export const useFetchNewsAuthorBySlug = (slug: string, limit: number) => {
  const [data, fetchData, loading] = useFetch();

  useEffect(() => {
    fetchData(NewsApi.all, { authorSlug: slug, limit }, false);
  }, []);

  return [data, loading];
};
