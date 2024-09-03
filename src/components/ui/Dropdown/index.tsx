import React from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown: React.FC<any> = ({ DropdownHeader, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref: any = useClickAway(() => {
    setIsOpen(false);
  });

  const handleOpenModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative flex" onClick={handleOpenModal}>
      <div className="flex items-center gap-x-3 rounded-md border border-gray-300 px-4 dark:border-gray-600">
        {DropdownHeader}
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isOpen && <div ref={ref}>{children}</div>}
    </div>
  );
};

export default Dropdown;
