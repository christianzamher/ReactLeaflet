
import { Navigate, Route, Routes } from "react-router-dom";
import { RoutePlanner } from "./components/RoutePlanner";
import { Header } from "./components/Header";
import { Footer } from "./components/UI/Footer";
import { About } from "./components/About";
import { AboutRuta } from "./components/AboutRuta";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RoutePlanner />} />
        <Route path="/equipo" element={<About />} />
        <Route path="/ruta" element={<AboutRuta />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
