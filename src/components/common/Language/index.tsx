import React from "react";
import Dropdown from "../../ui/Dropdown";

const Language: React.FC = () => {
  return (
    <Dropdown
      DropdownHeader={
        <div className="flex items-center py-3 cursor-pointer gap-x-2 whitespace-nowrap">
          <img
            className="h-[25px] min-w-[45px] rounded-sm object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/800px-Flag_of_Azerbaijan.svg.png"
            alt="Azerbaijan"
          />
        </div>
      }
    >
      <div className="absolute -bottom-[3rem] left-0 flex w-max cursor-pointer justify-center rounded-md border px-2 py-2 text-center text-white dark:border-gray-600">
        <img
          className="h-[25px] w-[45px] rounded-sm object-cover"
          src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
          alt="America"
        />
      </div>
    </Dropdown>
  );
};

export default Language;
