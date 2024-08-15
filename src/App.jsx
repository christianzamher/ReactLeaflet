import { Chip } from "@nextui-org/react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Landing_Page } from "./Pages/LandingPage/Landing_Page.View";
import { RoutePlanner } from "./components/RoutePlanner";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<RoutePlanner />}></Route>
        {/* <Route path="/home" element={<Header />}></Route> */}
        {/* <Route path="Routes" element={<RoutePlanner />}></Route> */}

        {/* <Route path="/*" element={<Navigate to="/Home" />} /> */}
      </Routes>
    </>
  );
}

export default App;
