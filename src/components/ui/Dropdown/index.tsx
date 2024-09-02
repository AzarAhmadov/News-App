import React from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown: React.FC<any> = ({ DropdownHeader, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const handleOpenModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="relative flex" onClick={handleOpenModal}>
        <div className="flex items-center px-4 border border-gray-300 rounded-md dark:border-gray-600 gap-x-3">
          {DropdownHeader}
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {isOpen && <div ref={ref}>{children}</div>}
      </div>
    </>
  );
};

export default Dropdown;
