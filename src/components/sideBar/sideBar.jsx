import { useState } from "react";

const NAV_ITEMS = [
  { label: "Dashboard" },
  { label: "Transactions" },
  { label: "Invoices & Bills" },
  { label: "Investments" },
  { label: "Reports" },
];

const BOTTOM_NAV = ["History", "Support", "Settings"];

export default function SideBar() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <aside className="sidebar">

      <div className="logo">
        <div className="logo-icon">F</div>
        <span className="logo-text">FinanceUs</span>
        <span className="logo-k">K</span>
      </div>

      <nav className="nav">
        {NAV_ITEMS.map(({ label }) => (
          <div
            key={label}
            className={`nav-item ${activeNav === label ? "nav-item-active" : ""}`}
            onClick={() => setActiveNav(label)}
          >
            {label}
          </div>
        ))}

        <div className="nav-divider" />

        {BOTTOM_NAV.map((label) => (
          <div key={label} className="nav-item">
            {label}
          </div>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="user-row">
          <div className="user-avatar">HP</div>
          <div className="user-info">
            <p>Hello Parvez</p>
            <span>Hello Parvez</span>
          </div>
        </div>
      </div>

    </aside>
  );
}