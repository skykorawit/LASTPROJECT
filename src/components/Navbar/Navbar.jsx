import React from "react";
import Logo from "../../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { Link, useNavigate } from "react-router-dom"; // นำเข้า Link จาก react-router-dom

const Menu = [
  { id: 1, name: "🏠Home", link: "/" },
  { id: 2, name: "💲Beetle", link: "/beetle" },
  { id: 3, name: "💲BeetlePlier", link: "/Pliers-beetle" },
  { id: 4, name: "💲Beetle Food", link: "/beetle-food" },
  { id: 5, name: "💲BeetleFeedingEquipment", link: "/beetle-feeding-equipment" },
];

const DropdownLinks = [
  { id: 1, name: "🔜Beetles Coming Soon", link: "/trending-products" }, // เปลี่ยนชื่อที่นี่
  { id: 2, name: "🛒ShopBeetle", link: "/best-selling" }, // เปลี่ยนชื่อที่นี่
  { id: 3, name: "🎮Beetle Feeding Game", link: "/top-rated" },
  { id: 4, name: "≡Order List", link: "/Order" },
];

const Navbar = ({ handleOrderPopup, cart }) => {

  let navigate = useNavigate()

  let amountItems = cart.reduce((amount, item) => {
    return amount + item.quantity
  }, 0)

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40 relative sticky top-0 left-0">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
            <img src={Logo} alt="Logo" className="w-10" />
            ShopBeetle
          </Link>

          {/* Order Button */}
          <div className="flex justify-between items-center gap-4">
            <button onClick={()=>{
              navigate('/beetle')
            }}
              className="bg-gradient-to-r relative from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              {/* <span className="group-hover:block hidden transition-all duration-200">Order</span> */}
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              {amountItems > 0 ? <p className="p-[2px] absolute w-[30px] bg-red-600 top-[-10px] right-[-10px] rounded-full">{amountItems}</p> : null}
            </button>

            {/* Darkmode Switch */}
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200 font-[medium]"
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* Dropdown Links */}
          <li className="group relative cursor-pointer">
            <span className="font-bold flex items-center gap-[2px] py-2">
              Other
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 font-[light]"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
