import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="py-4 mt-3 text-center border-t border-gray-400/20">
      <p className="flex justify-center gap-x-2">
        Created by
        <Link
          className="border-b border-b-primaryDark text-primaryDarker"
          target="_blank"
          to={"https://azarahmadov.vercel.app/"}
        >
          Azar Ahmadov
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
