import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import NewsBlock from "../components/share/NewsBlock/NewsBlock";
import NewsDetail from "../components/share/NewsDetail/NewsDetail";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <NewsBlock />,
      },
      {
        path: "/detail/:slug",
        element: <NewsDetail />,
      },
    ],
  },
]);

export default Routers;
