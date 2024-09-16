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
    <div>
      <h1>hello</h1>
      <p>dfwfwf</p>
    </div>
  );
};
export default Homepage;
