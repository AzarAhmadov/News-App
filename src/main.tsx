import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./router/router.tsx";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={Routers} />,
);
