import React, { useEffect, useState } from "react";
import data from "../../../public/data.json";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const favoriteProducts = data.products.filter(
      (product) => product.favorite
    );
    setFavoriteCount(favoriteProducts.length);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Search query:", searchQuery);
  };

  return (
    <nav className="bg-white sm:ms-10 text-black p-4 font-bold flex flex-col md:flex-row justify-center items-center">
      <div className="sm:mx-auto sm:flex justify-between w-full md:w-auto">
        <Link href={"/"} className="text-2xl font-extrabold flex mb-0 justify-center">
          Bandage
          <button
            className="sm:hidden text-black justify-end ms-60 relative"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </Link>
        <div
          className={`flex-col just md:flex-row md:flex ${
            isMenuOpen ? "flex" : "hidden"
          } w-full sm:w-auto`}
        >
          <ul className="flex mt-10 sm:mt-0 flex-col sm:flex-row space-y-4 my-2 sm:space-y-0 sm:space-x-4 mx-20 font-normal">
            <li className="flex justify-center hover:font-bold">
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-center *:hover:font-bold">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <Link href="/">Shop</Link>
                <FaChevronDown className="ml-2" />
              </div>
              {isDropdownOpen && (
                <ul className="absolute bg-white text-black mt-2 py-2 w-48 shadow-lg">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link href="/comingsoon">Category 1</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link href="/comingsoon">Category 2</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="flex justify-center hover:font-bold">
              <Link href="#about">About</Link>
            </li>
            <li className="flex justify-center hover:font-bold">
              <Link href="/">Blog</Link>
            </li>
            <li className="flex justify-center hover:font-bold">
              <Link href="/">Contact</Link>
            </li>
            <li className="flex justify-center hover:font-bold">
              <Link href="/">Pages</Link>
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mx-20">
            <li className="flex flex-row justify-center items-center">
              <Link
                href="/comingsoon"
                className="text-[#23A6F0] flex flex-row justify-center items-center"
              >
                <MdOutlineSupervisorAccount className="mr-1" size={20} />
                <span>Login</span>
              </Link>
              <span className="text-[#23A6F0] md:block mx-2">/</span>
              <Link href="/comingsoon" className="text-[#23A6F0]">
                Register
              </Link>
            </li>
            <li>
              <div className="text-[#23A6F0] flex justify-center items-center">
                <IoSearchOutline
                  className="mr-2 mt-1 size-8 sm:size-6 "
                  size={20}
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                />
                {isSearchOpen && (
                  <form
                    onSubmit={handleSearchSubmit}
                    className="flex items-center"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="ml-2 p-1 text-[#23A6F0]"
                      placeholder="Search..."
                    />
                    <button
                      type="submit"
                      className="ml-2 p-1 bg-[#23A6F0] rounded text-white"
                    >
                      Go
                    </button>
                  </form>
                )}
              </div>
            </li>
            <li>
              <Link
                href="/comingsoon"
                className="text-[#23A6F0] flex  justify-center items-center font-semibold"
              >
                <CiShoppingCart className="mr-1 mt-0.5 size-10 sm:size-6 "/>
                <span className="mr-2 mt-1">1</span>
              </Link>
            </li>
            <li>
              <Link
                href="/comingsoon"
                className="text-[#23A6F0] flex justify-center items-center font-semibold"
              >
                <CiHeart className="mr-1 mt-1 size-10 sm:size-6 " />
                <span className="mt-1">{favoriteCount}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;