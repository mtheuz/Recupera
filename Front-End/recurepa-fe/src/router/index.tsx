import { Routes, Route } from "react-router";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Home from "../pages/Home";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default Routers;