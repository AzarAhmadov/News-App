import React from "react";
import Dropdown from "../../ui/Dropdown";
import { useStoreApp } from "../../../store/features/app.slice";
import { serviceSetLanguage } from "../../../services/app.service";

const Language: React.FC = () => {
  const { language, languages } = useStoreApp();

  return (
    <Dropdown
      DropdownHeader={
        <div className="flex items-center py-2 gap-x-2 whitespace-nowrap md:py-3">
          {language.toUpperCase()}
        </div>
      }
    >
      <div className="absolute -bottom-[3rem] left-0 flex w-max cursor-pointer justify-center rounded-md border px-2 py-2 text-center text-white dark:border-gray-600">
        {languages
          .filter((i) => i !== language)
          .map((lang, index) => (
            <button
              onClick={() => serviceSetLanguage(lang)}
              key={index}
              className="px-3 text-black dark:text-white"
            >
              {lang.toUpperCase()}
            </button>
          ))}
      </div>
    </Dropdown>
  );
};

export default Language;
