import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidepanel";
import { BiLogOut } from "react-icons/bi";

export default function Mainpanel() {
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-2 overflow-auto w-full">
        <div className="w-full py-2 px-2 themebg mb-4 flex justify-end items-center">
          <button onClick={handlelogout} className="btn">
            Logout
          </button>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
