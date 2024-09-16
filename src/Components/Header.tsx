import React from "react";

const Header = () => {
  return (
    <header style={{ ...headerStyle }}>
      <div style={logoStyle}>Jads web developer</div>
      <div style={centerButtonStyle}></div>
      <div style={rightSectionStyle}>
        <span style={bookCallStyle}>Book a call</span>
        <button style={connectButtonStyle}>
          <span>→ Let's connect</span>
        </button>
      </div>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "35px 25px 35px 25px",
  backgroundColor: "#f8f8f8",
  borderRadius: "16px",
};

const logoStyle: React.CSSProperties = {
  fontWeight: "bold",
  fontSize: "22px",
  color: "#2a2a2a",
};

const centerButtonStyle: React.CSSProperties = {
  width: "50px",
  height: "5px",
  backgroundColor: "#2a2a2a",
  borderRadius: "50px",
};

const rightSectionStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const bookCallStyle: React.CSSProperties = {
  marginRight: "20px",
  color: "#2a2a2a",
};

const connectButtonStyle: React.CSSProperties = {
  backgroundColor: "#2a2a2a",
  color: "#ffffff",
  borderRadius: "25px",
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
};

export default Header;
