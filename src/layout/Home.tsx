import React from "react";
import Aside from "../components/common/Aside/Aside";
import RightBlock from "../components/common/RightBlock/RightBlock";
import { Outlet } from "react-router-dom";
import Search from "../components/common/Seach/Search";

const Home: React.FC = () => {
  return (
    <div className="grid min-h-screen grid-cols-[16.25rem_auto_17.813rem] gap-5 bg-bodyBack">
      <Aside />
      <main className="py-8">
        <Search />
        <Outlet />
      </main>
      <RightBlock />
    </div>
  );
};

export default Home;
