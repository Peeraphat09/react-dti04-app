import React from "react";

export default function HeaderCal(props) {
  const { titleName, imgName, titleColor } = props;
  return (
    <div>
      <h1 style={{ textAlign: "center", color: titleColor }}>{titleName}</h1>
      <img
        style={{ display: "block", margin: "0 auto", width: "150px" }}
        src={imgName}
        alt=""
      />
    </div>
  );
}
