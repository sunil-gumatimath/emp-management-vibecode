import React from "react";
import Button from "./Button";

const Sidebar = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { icon: "👥", label: "Employees", id: "employees" },
    { icon: "📊", label: "Analytics", id: "analytics" },
    { icon: "📅", label: "Calendar", id: "calendar" },
    { icon: "⚙️", label: "Settings", id: "settings" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="brand-logo">
          <span className="font-bold text-white text-lg">S</span>
        </div>
        <h1 className="brand-name">
          Staffly
        </h1>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="pro-card">
          <h4 className="text-sm font-semibold text-black mb-1">Pro Plan</h4>
          <p className="text-xs text-gray-500 mb-3">
            Your team is growing fast!
          </p>
          <Button
            variant="primary"
            className="w-full justify-center"
            onClick={() => alert("Upgrade feature coming soon!")}
          >
            Upgrade
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
