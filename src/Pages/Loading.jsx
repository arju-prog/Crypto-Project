import React from "react";

function Loading() {
  return (
    <div
      style={{
        backgroundColor: "#0A0F1A",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "sans-serif",
        fontSize: "24px",
        position: "relative",
      }}
    >
     
      <div
        style={{
          border: "8px solid #2a2a2a",
          borderTop: "8px solid #A020F0",
          borderRadius: "50%",
          width: "80px",
          height: "80px",
          animation: "spin 1s linear infinite",
          marginBottom: "20px",
        }}
      ></div>

      <div>Loading...</div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default Loading;