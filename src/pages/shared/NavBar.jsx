import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/menu">Our Menu</Link>
      </li>

      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>

      {isAdmin ? (
        <li>
          <Link to="/dashboard/manageItems">Dashboard</Link>
        </li>
      ) : (
        <li>
          <Link to="/dashboard/cart">
            <div className="badge badge-primary">
              <FaShoppingCart className="mr-2"></FaShoppingCart>+{cart?.length}
            </div>
          </Link>
        </li>
      )}

      {!!user || (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar opacity-75 fixed max-w-screen-xl backdrop-blur-md bg-white text-black z-30">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex items-center"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        <div className="navbar-end">
          {!!user && (
            <>
              <span className="uppercase mr-2 border px-6 py-3 rounded-lg">
                {user?.displayName}
              </span>{" "}
              <a className="btn" onClick={handleLogOut}>
                LogOut
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
