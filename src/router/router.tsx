import { createBrowserRouter, ScrollRestoration } from "react-router-dom";
import Home from "../layout/Home";
import NewsDetail from "../components/share/NewsDetail/NewsDetail";
import CenterBlock from "../components/share/CenterBlock/CenterBlock";
import Search from "../components/share/Search/Search";
import AuthorDetail from "../components/share/AuthorDetail/AuthorDetail";
import SearchArea from "../components/ui/SearchArea";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <ScrollRestoration />
      </>
    ),
    children: [
      {
        index: true,
        element: <CenterBlock />,
      },
      {
        path: "/search",
        element: <SearchArea />,
      },
      {
        path: "/detail/:slug",
        element: <NewsDetail />,
      },
      {
        path: "/author/:slug",
        element: <AuthorDetail />,
      },
    ],
  },
]);

export default Routers;
