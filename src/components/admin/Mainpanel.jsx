import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Mainpanel() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto text-gray-800 dark:text-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
