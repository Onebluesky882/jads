const Footer = () => {
  return (
    <div
      style={{
        ...divContainerFooter,
      }}
    >
      <footer style={{ ...frame }}>
        <div style={rightSectionStyle}>
          <span style={bookCallStyle}>Book a cawfwfnpll</span>
          <button style={connectButtonStyle}>
            <span>→ Let's connect</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

const divContainerFooter: React.CSSProperties = {
  justifyContent: "center",
  display: "flex",
  position: "sticky",
};

const frame: React.CSSProperties = {
  bottom: "18px",
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "35px 25px 35px 25px",
  backgroundColor: "#f8f8f8",
  borderRadius: "16px",
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

export default Footer;
