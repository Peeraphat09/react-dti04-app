import React from 'react'

export default function Footer({emoji}) {
    const footStyle = {
        fontFamily: "Itim",
        fontSize: "18px",
    }
  return (
    <div style={{textAlign: "center",  marginTop: "50px" , marginBottom: "50px"}}>
        <span style={footStyle}>Created by Peet {emoji} </span>
        <br />
        <span style={footStyle}>Copyright © 2025 Southeast Asia University</span>
    </div>
  )
}
