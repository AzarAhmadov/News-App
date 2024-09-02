import React from "react";
import { serviceSetDarkmode } from "../../../services/app.service";
import { TiWeatherSunny } from "react-icons/ti";
import { useStoreApp } from "../../../store/features/app.slice";
import { IoMoonOutline } from "react-icons/io5";

const Theme: React.FC = () => {
  const { darkMode } = useStoreApp();

  const setThemeMode = () => {
    serviceSetDarkmode(!darkMode);
  };

  if (darkMode) {
    document.querySelector("body")?.classList.add("dark");
  } else {
    document.querySelector("body")?.classList.remove("dark");
  }

  return (
    <div
      onClick={() => setThemeMode()}
      className="flex cursor-pointer shrink-0"
    >
      {darkMode ? (
        <TiWeatherSunny className="text-[2rem]" />
      ) : (
        <IoMoonOutline className="text-[2rem]" />
      )}
    </div>
  );
};

export default Theme;
