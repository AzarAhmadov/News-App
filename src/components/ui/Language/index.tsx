import React from "react";
import Dropdown from "../Dropdown";

const Language: React.FC = () => {
  return (
    <Dropdown
      DropdownHeader={
        <div className="flex items-center py-3 cursor-pointer gap-x-2 whitespace-nowrap">
          <img
            className="h-[25px] w-[190px] rounded-sm object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/800px-Flag_of_Azerbaijan.svg.png"
            alt="Azerbaijan"
          />
        </div>
      }
    >
      <div className="absolute cursor-pointer -bottom-[3.6rem] left-0 flex w-max px-2 justify-center rounded-md border py-2 text-center text-white">
        <img
          className="h-[30px] w-[50px] rounded-sm object-cover"
          src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
          alt="America"
        />
      </div>
    </Dropdown>
  );
};

export default Language;
