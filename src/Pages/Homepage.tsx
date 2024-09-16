import { useEffect } from "react";

const Homepage = () => {
  const showTime = () => {
    const time = new Date().toISOString();
    return time;
  };

  useEffect(() => {
    showTime();
  });
  return (
    <div
      style={{
        margin: "auto ",
        display: "flex",
        width: "500px",
        padding: "30px",
      }}
    >
      {" "}
      <div style={{ display: "flex" }}> </div>
      <ol
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <li>
          <p>Easy to used</p>
        </li>
        <li>
          <p>Faster load pages</p>
        </li>
        <li>High Performance</li>
        <li>SEO Friendly</li>
      </ol>
    </div>
  );
};
export default Homepage;
