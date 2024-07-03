"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useGetCartItemsQuery } from "../_state/_services/CartApi";
import Cart from "../_components/Cart";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { user } = useUser();
  const { data, isSuccess } = useGetCartItemsQuery(
    user?.primaryEmailAddress?.emailAddress
  );
  const [isSign, setIsSign] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsSign(pathName === "/sign-in" || pathName === "/sign-up");
  }, [pathName]);

  return (
    !isSign && (
      <header className="bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <svg
                className="h-8"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 6V4C16 2.343 14.657 1 13 1C11.343 1 10 2.343 10 4V6H5C4.45 6 4 6.45 4 7V22C4 22.55 4.45 23 5 23H19C19.55 23 20 22.55 20 22V7C20 6.45 19.55 6 19 6H16ZM12 4C12 3.448 12.448 3 13 3C13.552 3 14 3.448 14 4V6H12V4ZM6 8H18V20H6V8ZM8 10V12H10V10H8ZM14 10V12H16V10H14Z"
                  fill="currentColor"
                />
              </svg>
              </a>
            </div>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow transition-all hover:bg-teal-500"
                    href="/sign-in"
                  >
                    Login
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md px-5 py-2.5 text-sm font-medium transition-all bg-gray-700 text-white hover:bg-gray-600"
                      href="/sign-up"
                    >
                      Register
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-6">
                  <h2 className="flex gap-1 cursor-pointer text-white">
                    <button
                      className="relative"
                      onClick={() => setCartOpen(!cartOpen)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                      {isSuccess && (
                        <span className="absolute bottom-4 left-4 flex justify-center items-center w-5 h-5 rounded-full text-[10px] font-semibold bg-teal-600 text-white">
                          {data?.data?.length}
                        </span>
                      )}
                      {isSuccess && cartOpen ? (
                        <Cart data={data?.data} />
                      ) : (
                        <></>
                      )}
                    </button>
                  </h2>
                  <UserButton />
                </div>
              )}

              <div className="block md:hidden">
                <button className="rounded  transition  bg-gray-800 text-white hover:text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
