import { Link, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa6";

const Dashboard = () => {
  const { user } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);

  const { pathname } = useLocation();
  console.log(pathname);

  const list = [
    [
      "/dashboard/cart",
      "Cart",
      <FaCartPlus key={1} className="w-5 h-5 fill-current text-gray-600" />,
    ],
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div
          style={{ top: openMenu ? "0%" : "-100%" }}
          className="lg:h-screen absolute lg:static p-5 space-y-2 lg:w-3/12 w-full bg-yellow-300 text-gray-800 transition-all duration-200"
        >
          <div className="flex items-center p-2 space-x-4">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-12 h-12 rounded-full bg-gray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">{user?.displayName}</h2>
              <span className="flex items-center space-x-1">
                <span className="text-xs hover:underline text-gray-600">
                  {user?.email}
                </span>
              </span>
            </div>
          </div>
          <div className="divide-y divide-gray-900">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {list.map((lii, i) => (
                <li
                  key={i}
                  className={`${
                    pathname === lii[0] && "bg-yellow-100"
                  } text-gray-900`}
                >
                  <Link
                    to={lii[0]}
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    {lii[2]}
                    <span>{lii[1]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-9/12" onBlur={() => setOpenMenu(false)}>
          <button
            className="btn btn-circle fixed top-5 right-5 lg:hidden"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <GiHamburgerMenu />
          </button>
          <div className="p-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
