import React from "react";
import NavBar from "./../components/NavBar";

export default function NotFound() {
  return (
    <div>
      <NavBar />
      <h1
        style={{ textAlign: "center", marginTop: "100px", fontFamily: "Itim" }}>
        404 Page Not Found
      </h1>
      <h1 style={{ textAlign: "center" }}>
        ไม่พบเพจที่คุณต้องการ กรุณาตรวจสอบ URL
      </h1>
    </div>
  );
}
