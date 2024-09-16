import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalBodyContainer>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </GlobalBodyContainer>
      <Footer />
    </BrowserRouter>
  );
}

export const GlobalBodyContainer = ({ children }: React.PropsWithChildren) => {
  return <div style={{ margin: "auto " }}>{children}</div>;
};

export default App;
