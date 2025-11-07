import React from "react";
import { Home, ShoppingBag, Users, Settings } from "lucide-react";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "Products", icon: <ShoppingBag size={20} /> },
    { name: "Customers", icon: <Users size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Admin Panel</h2>
      <ul className="space-y-4">
        {menu.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg transition"
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
