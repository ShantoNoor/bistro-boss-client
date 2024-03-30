import { Link, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa6";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const { user } = useAuth();
  const [cart] = useCart();
  const [openMenu, setOpenMenu] = useState(false);
  const [admin] = useAdmin();

  const { pathname } = useLocation();

  const adminList = [
    [
      "/dashboard/adminHome",
      "Admin Home",
      <FaHome key={1} className="w-5 h-5 fill-current text-gray-600" />,
    ],
    [
      "/dashboard/addItems",
      "Add Items",
      <FaUtensils key={1} className="w-5 h-5 fill-current text-gray-600" />,
    ],
    [
      "/dashboard/manageItems",
      "Manage Items",
      <FaList key={1} className="w-5 h-5 fill-current text-gray-600" />,
    ],
    [
      "/dashboard/bookings",
      "Manage Bookings",
      <FaBook key={1} className="w-5 h-5 fill-current text-gray-600" />,
    ],
    [
      "/dashboard/users",
      "All Users",
      <FaUsers key={1} className="w-5 h-5 fill-current text-gray-600" />,
    ],
  ];

  const userList = [
    [
      "/dashboard/userHome",
      "User Home",
      <FaHome key={1} className="w-5 h-5 fill-current text-gray-600" />,
    ],
    [
      "/dashboard/reservation",
      "Reservation",
      <FaCalendar key={1} className="w-5 h-5 fill-current text-gray-600" />,
    ],
    [
      "/dashboard/cart",
      `Cart (${cart.length})`,
      <FaCartPlus key={1} className="w-5 h-5 fill-current text-gray-600" />,
    ],
    [
      "/dashboard/review",
      "Add a Review",
      <FaAd key={1} className="w-5 h-5 fill-current text-gray-600" />,
    ],
    [
      "/dashboard/bookings",
      "My Bookings",
      <FaList key={1} className="w-5 h-5 fill-current text-gray-600" />,
    ],
  ];

  const commonList = [
    [
      "/",
      "Home",
      <FaHome key={1} className="w-5 h-5 fill-current text-gray-600" />,
    ],
    [
      "/order/salad",
      "Menu",
      <FaSearch key={1} className="w-5 h-5 fill-current text-gray-600" />,
    ],
    [
      "/contact",
      "Contact",
      <FaEnvelope key={1} className="w-5 h-5 fill-current text-gray-600" />,
    ],
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div
          style={{ left: openMenu ? "0%" : "-100%" }}
          className="lg:min-h-screen fixed top-0 lg:static p-5 z-20 space-y-2 lg:w-3/12 w-full bg-yellow-300 text-gray-800 transition-all duration-200"
        >
          <div className="flex items-center p-2 space-x-4">
            <div>
              <h2 className="font-semibold uppercase text-3xl">Bistro Boss</h2>
              <span className="flex items-center">
                <span className="text-xl hover:underline text-gray-600 uppercase tracking-[7px]">
                  Restaurant
                </span>
              </span>
            </div>
          </div>
          <div className="flex items-center p-2 space-x-4">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-12 h-12 rounded-xl bg-gray-500"
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
            {admin ? (
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                {adminList.map((lii, i) => (
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
            ) : (
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                {userList.map((lii, i) => (
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
            )}
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {commonList.map((lii, i) => (
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
            className="btn btn-circle fixed top-5 right-5 lg:hidden z-30"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <GiHamburgerMenu />
          </button>
          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
