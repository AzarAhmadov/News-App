import React from "react";
import Aside from "../components/common/Aside/Aside";
import { Outlet } from "react-router-dom";
import Search from "../components/common/Seach/Search";

const Home: React.FC = () => {
  return (
    <div className="grid h-full grid-cols-[260px_calc(100%_-_300px)] gap-[20px] pt-3">
      <Aside />
      <main className="container mx-auto">
        <Search />
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
