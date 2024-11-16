import React from "react";
import Aside from "../components/common/Aside/Aside";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import useWidth from "../hooks/useWidth";

const Home: React.FC = () => {
  const width = useWidth();

  return (
    <div
      className={`grid ${
        width > 992
          ? "grid-cols-[260px_calc(100%_-_325px)]"
          : "grid-cols-[100%]"
      } gap-[35px] px-5 pt-3`}
    >
      {width > 992 && <Aside />}
      <div className="container mx-auto flex h-screen flex-col justify-between">
        <div>
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
