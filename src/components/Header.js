import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
// header start
const Header = () => {
  const [btn, setbtn] = useState("login");
  const onlineStatus=useOnlineStatus()
  const {loggedInUser}=useContext(userContext)

  return (
    <div className="flex justify-between  bg-orange-400">
      <div className="logo-container p-2 m-2">
        <img className="w-20" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex ">
          <li className="px-4">
            online status : {onlineStatus ? "🟢": "🔴"}
          </li >
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link>Cart</Link>
          </li>
          <button
            className="login-btn px-4"
            onClick={() => {
              btn === "login" ? setbtn("logout") : setbtn("login");
            }}
          >
            {btn}
          </button>
          <li className="px-4">
            <Link>{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
