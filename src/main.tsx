import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./router/router.tsx";
import { Provider } from "react-redux";
import { store } from "./store/app.store.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <RouterProvider router={Routers} />
    </Provider>
    <ToastContainer />
  </>,
);
