import { Chip } from "@nextui-org/react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Landing_Page } from "./Pages/LandingPage/Landing_Page.View";
import { RoutePlanner } from "./components/RoutePlanner";
import { Header } from "./components/Header";
import { Footer } from "./components/UI/Footer";
import { About } from "./components/UI/About";
import { AboutRuta } from "./components/UI/AboutRuta";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RoutePlanner />}></Route>
        <Route path="/equipo" element={<About />}></Route>
        <Route path="/ruta" element={<AboutRuta />}></Route>

        {/* <Route path="/*" element={<Navigate to="/Home" />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
