import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TextFirstLineUpperCase } from "../../../helper/helper";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const { pathname, search } = location;
  const category = search.split("=")[1];
  const segments = pathname.split("/");
  let url = "";

  return (
    <div className="mt-6 mb-2">
      <nav className="flex" aria-label="Breadcrumb">
        <ul className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          {segments.map((segment, i) => {
            url += `${segment}`;
            return (
              <li key={i} aria-current="page">
                <div className="flex items-center">
                  {url.length > 1 && (
                    <svg
                      className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 9L5 5 1 1"
                      />
                    </svg>
                  )}
                  <Link
                    to={`/${url}`}
                    className="text-sm font-medium text-gray-500 transition-all hover:text-black ms-1 md:ms-2"
                  >
                    {segment === "" ? "Home" : TextFirstLineUpperCase(segment)}
                  </Link>
                </div>
              </li>
            );
          })}
          {category && (
            <li className="flex items-center">
              <svg
                className="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 9L5 5 1 1"
                />
              </svg>
              <span className="text-sm font-medium text-gray-500 ms-1 md:ms-2 dark:text-gray-400">
                {TextFirstLineUpperCase(category)}
              </span>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
