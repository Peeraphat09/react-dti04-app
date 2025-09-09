import React from "react";
import NavBar from "./../components/NavBar";
import HeaderCal from "../components/HeaderCal";
import money from "./../assets/money.png";
import Footer from "../components/Footer";

export default function MoneyCal() {
  return (
    <>
      <NavBar />
      <HeaderCal titleName="Money Calculator" imgName={money} titleColor="green" />
      <Footer emoji="👋" />
    </>
  );
}
