import React from "react";
import NavBar from "./../components/NavBar";
import HeaderCal from "../components/HeaderCal";
import car from "./../assets/car.png";
import Footer from "../components/Footer";

export default function CarCal() {
  return (
    <>
      <NavBar /> <HeaderCal titleName="Car Calculator" imgName={car} />
      <Footer emoji="😎" />
    </>
  );
}
