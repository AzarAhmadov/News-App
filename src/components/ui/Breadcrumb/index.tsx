import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TextFirstLineUpperCase } from "../../../helper/helper";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const { pathname, search } = location;
  const category = search.split("=")[1];
  const segments = pathname.split("/");
  let url = "";

  // const NewFormat = {
  //   home: "Ana Sehife",
  //   search: "Axtaris",
  // };

  return (
    <div className="mt-6 mb-2">
      <nav className="flex" aria-label="Breadcrumb">
        <ul className="flex gap-x-2">
          {segments.map((segment, i) => {
            url += `${segment}`;

            return (
              <li key={i} aria-current="page">
                <div className="flex items-center text-md">
                  {url.length > 1 && (
                    <svg
                      className="w-3 h-3 text-gray-400"
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

                  {url === "" ? (
                    <Link to={"/"}>Home</Link>
                  ) : (
                    <Link className="ms-2" to={`/${url}`}>
                      {TextFirstLineUpperCase(url)}
                    </Link>
                  )}
                </div>
              </li>
            );
          })}

          {category && (
            <li className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400"
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
              <span className="font-medium text-gray-500 text-md ms-2 dark:text-gray-400">
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
