import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Home from "./Home";
import ThankYou from "./ThankYou";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
