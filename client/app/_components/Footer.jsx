"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isSign, setIsSign] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    setIsSign(
      pathName.toString() === "/sign-in" || pathName.toString() === "/sign-up"
    );
  }, [pathName.toString()]);
  return (
    !isSign && (
      <footer className="bbg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
            <svg
                className="h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 6V4C16 2.343 14.657 1 13 1C11.343 1 10 2.343 10 4V6H5C4.45 6 4 6.45 4 7V22C4 22.55 4.45 23 5 23H19C19.55 23 20 22.55 20 22V7C20 6.45 19.55 6 19 6H16ZM12 4C12 3.448 12.448 3 13 3C13.552 3 14 3.448 14 4V6H12V4ZM6 8H18V20H6V8ZM8 10V12H10V10H8ZM14 10V12H16V10H14Z"
                  fill="currentColor"
                />
              </svg>

            </div>

            <p className="mt-4 text-center text-sm  lg:mt-0 lg:text-right text-gray-400">
              Copyright &copy; 2024. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
