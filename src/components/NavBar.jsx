import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const container = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fa4a1d",
    padding: "10px 40px",
  };

  const menu = {
    listStyleType: "none",
    display: "flex",
    gap: "15px",
  };

  const menuAction = {
    color: "#fece93ff",
    fontWeight: "bold",
  };

  const linkAction = {
    textDecoration: "none",
    color: "#fece93ff",
  };

  return (
    <div style={container}>
      <div style={{ fontSize: "30px", fontWeight: "bold", color: "white" }}>
        DTI Calculator
      </div>
      <div>
        <ul style={menu}>
          <li style={menuAction}><Link style={linkAction} to="/">{"Home"}</Link></li>
          <li style={menuAction}><Link style={linkAction} to="/calculator/moneyCal">MONEY Cal</Link></li>
          <li style={menuAction}><Link style={linkAction} to="/calculator/squareCal">SQUARE Cal</Link></li>
          <li style={menuAction}><Link style={linkAction} to="/calculator/bmrCal">BMR Cal</Link></li>
          <li style={menuAction}><Link style={linkAction} to="/calculator/carCal">Car Cal</Link></li>
        </ul>
      </div>
    </div>
  );
}
