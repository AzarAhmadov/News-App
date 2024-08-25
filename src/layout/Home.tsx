import React from "react";
import Aside from "../components/common/Aside/Aside";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header/Header";

const Home: React.FC = () => {
  return (
    <div className="grid h-full grid-cols-[260px_calc(100%_-_325px)] gap-[35px] pt-3">
      <Aside />
      <main className="container mx-auto">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
