import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import NewsDetail from "../components/share/NewsDetail/NewsDetail";
import CenterBlock from "../components/share/CenterBlock/CenterBlock";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <CenterBlock />,
      },
      {
        path: "/detail/:slug",
        element: <NewsDetail />,
      },
    ],
  },
]);

export default Routers;
