import React from "react";
import NavBar from "./../components/NavBar";
import HeaderCal from "../components/HeaderCal";
import square from "./../assets/square.png";
import Footer from "../components/Footer";

export default function SquareCal() {
  return (
    <div>
      <NavBar /> <HeaderCal titleName="Square Calculator" imgName={square} titleColor="purple" />
      <Footer emoji="🎪" />
    </div>
  );
}
