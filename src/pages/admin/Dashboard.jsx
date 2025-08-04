import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidepanel";

export default function Mainpanel() {
  return (
     <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto w-full">
        <Outlet />
      </main>
    </div>
  );
}
