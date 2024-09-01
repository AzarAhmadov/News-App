import React from "react";
import Aside from "../components/common/Aside/Aside";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-[260px_calc(100%_-_325px)] gap-[35px] pt-3">
      <Aside />
      <div className="container flex flex-col justify-between h-screen mx-auto">
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
