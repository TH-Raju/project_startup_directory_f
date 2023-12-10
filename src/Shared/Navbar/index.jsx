/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const Navbar = () => {
  const navigate = useNavigate();
  const menuItems = (
    <>
      <li>
        <Link to="/">
          <p>Home</p>
        </Link>
      </li>
      <li>
        <Link to="/addstartup">
          <p>Add New</p>
        </Link>
      </li>
    </>
  );

  const [searchValue, setSearchValue] = useState("");

  const searchData = () => {
    console.log(searchValue);
    let data = searchValue.split("");
    let upper = data.shift("").toUpperCase() + data.join("");
    // console.log(upper);
    navigate(`/search/${upper}`);
    //logic to handle the search data here
  };

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" to="/">
          Startup-Directory
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex ">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div>
            <button className="btn text-xs" onClick={searchData}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
