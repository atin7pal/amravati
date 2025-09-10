import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUser, FiSettings } from "react-icons/fi";
import { PiProjectorScreenChart } from "react-icons/pi";
import { TbLayoutList } from "react-icons/tb";
import logo from '../../assets/logobuilding.svg'

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Enquiries", path: "/admin/enquiries", icon: <FiUser /> },
    {
      name: "Projects Master",
      path: "/admin/completedprojects",
      icon: <PiProjectorScreenChart />,
    },
     {
      name: "Project List",
      path: "/admin/completedlist",
      icon: <TbLayoutList />,
    },
  ];

  return (
    <aside className="w-64 h-screen themebg shadow-sm hidden md:block accentfont sticky top-0 left-0 z-10">
      <div className="h-full flex flex-col">
        <img src={logo} alt="" className="h-[110px] w-[110px] mx-auto mt-10 rounded-full" />
        <div className="p-6 pb-10 text-3xl bgcolorfont text-center accentfont">
          Admin Panel
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 accentfont transition-all ${
                  isActive
                    ? "font-semibold accentfont brownbg"
                    : "text-gray-700 hover:bg-gray-100 accentfont"
                }`}
              >
                <span className="accentfont">{item.icon}</span>
                <span className="accentfont">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
