import { createBrowserRouter, ScrollRestoration } from "react-router-dom";
import Home from "../layout/Home";
import CenterBlock from "../components/share/CenterBlock/CenterBlock";
import SearchArea from "../components/ui/SearchArea";
import NewsDetail from "../pages/NewsDetail/NewsDetail";
import AuthorDetail from "../pages/AuthorDetail/AuthorDetail";
import Modal from "../components/common/Modals/Login/Login";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <Modal />
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
