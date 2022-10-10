import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-slate-400 shadow md:px-12">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <h2 className="text-2xl text-slate-300 font-bold">Logo</h2>
            <div className="md:hidden">
              <button
                type="button"
                className="p-2 text-gray-700 rounded-md outline-none cursor-pointer"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
          }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-800 font-semibold md:font-bold bg-slate-300 md:bg-slate-400 p-2 hover:text-gray-600">
                <Link to="/" onClick={() => { setNavbar(false); }}>Home</Link>
              </li>
              <li className="text-gray-800 font-semibold bg-slate-300 md:font-bold md:bg-slate-400 p-2 hover:text-gray-600">
                <Link to="/all-creators" onClick={() => { setNavbar(false); }}>List</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
