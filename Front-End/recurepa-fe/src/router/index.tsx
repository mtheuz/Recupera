import { Routes, Route } from "react-router";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Cadastro />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default Routers;