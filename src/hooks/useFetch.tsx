import { useEffect, useState } from "react";
import { API } from "../utils/api";
import NewsApi from "../api/news.api";
import AuthorApi from "../api/author.api";

interface ApiResponse<T> {
  data: T;
}

type FetchFunction = (
  url: string,
  params?: Record<string, any>,
  list?: boolean,
) => Promise<void>;

function useFetch<T>(initialState: T): [T, FetchFunction, boolean] {
  const [data, setData] = useState<T>(initialState);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData: FetchFunction = async (url, params = {}, list = true) => {
    try {
      setLoading(true);
      const res: ApiResponse<T> = await API.get(url, { params });
      setData(list ? res.data : (res as unknown as T));
    } catch (e) {
      console.error("Error fetching data:", e);
    } finally {
      setLoading(false);
    }
  };

  return [data, fetchData, loading];
}

export function useFetchCategories(): [string[], boolean] {
  const [data, fetchData, loading] = useFetch<string[]>([]);

  useEffect(() => {
    fetchData(NewsApi.categories, {}, false);
  }, []);

  return [data, loading];
}

export function useFetchAllNews(page: number, limit: number): [any[], boolean] {
  const [data, fetchData, loading] = useFetch<any[]>([]);

  useEffect(() => {
    fetchData(NewsApi.all, { page, limit }, true);
  }, [page, limit]);

  return [data, loading];
}

export function useFetchNewsBySlug(slug: any): [any, boolean] {
  const [data, fetchData, loading] = useFetch<any>({});

  useEffect(() => {
    fetchData(NewsApi.bySlug.replace(":slug", slug), {}, false);
  }, [slug]);

  return [data, loading];
}

export function useFetchNewsByCategory(
  category: any,
  page = 1,
  limit = 9,
): [any[], boolean] {
  const [data, fetchData, loading] = useFetch<any[]>([]);

  useEffect(() => {
    fetchData(NewsApi.all, { category, page, limit }, true);
  }, [category, page]);

  return [data, loading];
}

export function useFetchAuthors(): [any[], boolean] {
  const [data, fetchData, loading] = useFetch<any[]>([]);

  useEffect(() => {
    fetchData(AuthorApi.all, {}, false);
  }, []);

  return [data, loading];
}

export function useFetchAuthorBySlug(slug: any): [any, boolean] {
  const [data, fetchData, loading] = useFetch<any>({});

  useEffect(() => {
    fetchData(AuthorApi.bySlug.replace(":slug", slug), {}, false);
  }, [slug]);

  return [data, loading];
}

export function useFetchNewsAuthorBySlug(
  slug: any,
  page: number,
  limit: number = 9,
): [any, boolean] {
  const [data, fetchData, loading] = useFetch<any>({});

  useEffect(() => {
    fetchData(NewsApi.all, { authorSlug: slug, page, limit }, false);
  }, [slug, page]);

  return [data, loading];
}
