import React from "react";

export default function HeaderCal(props) {
  const { titleName, imgName } = props;
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#fa4a1d" }}>{titleName}</h1>
      <img
        style={{ display: "block", margin: "0 auto", width: "150px" }}
        src={imgName}
        alt=""
      />
    </div>
  );
}
