import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart, AiOutlineExperiment } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import { Routes, Link, NavLink, Route } from "react-router-dom";
import User from "../pages/User/User";
import TopBar from "./TopBar";
import DashHome from "../pages/DashHome/DashHome";
import Tables from "../pages/Tables/Tables";
import Setting from "../pages/Setting/Setting";
import Notifications from "../pages/Notifications/Notifications";
import TablesData from "./TablesData";
import Products from "../pages/Products/Products";
import Orders from "../pages/Orders/Orders";
import AdminJobs from "../pages/AdminJobs/AdminJobs";
import Stores from "../pages/Store/Store";
const SideNav = () => {
  const menus = [
    { name: "Dashboard", link: "/home", icon: MdOutlineDashboard },
    { name: "Profile", link: "/profile", icon: AiOutlineUser },
    // { name: "Tables", link: "/tables", icon: FiMessageSquare },
    { name: "Products", link: "/products", icon: FiShoppingBag },
    { name: "Orders", link: "/orders", icon: FiShoppingCart },
    { name: "Stores", link: "/stores", icon: FiShoppingCart },
    {name: "Admin Jobs", link:"/admin", icon: AiOutlineExperiment},
    // {name: "Notifications",link: "/notifications", icon: TbReportAnalytics, },
    { name: "Sign In", link: "/login", icon: FiFolder, margin: true },
    { name: "Search", link: "/setting", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6 ">
      <div
        className={`bg-[#1b223a] min-h-screen ${
          open ? "w-56" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <NavLink
              to={menu?.link}
              key={i}
              className={`
             ${({ isActive }) => (isActive ? "active" : "inactive")}
              ${
                menu?.margin && "mt-20"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-indigo-800   rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-30 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-full ">
        <TopBar />
        <Routes>
          <Route path="/home" element={<DashHome />} />
          <Route path="/profile" element={<User />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/stores" element={<Stores/>} />
          <Route path="/admin" element={<AdminJobs />} />
          <Route path="/tables/data" element={<TablesData />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </section>
  );
};

export default SideNav;
