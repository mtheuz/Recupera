import { Mail, RectangleEllipsis, User2 } from "lucide-react";
import { Input } from "../ui/components/Input";
import { Button } from "../ui/components/Button";
import { useState } from "react";
import axios from "axios";

function Cadastro() {
  const [username, setUsername] = useState("");
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); 

    setError(""); 
    setSuccess(""); 

    if (!nome || !username || !email || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não correspondem.");
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError("E-mail inválido.");
      return;
    }

    const data = {nome, username, email, password };

    try {
      await axios.post("http://127.0.0.1:8001/user/", data);
      setSuccess("Cadastro realizado com sucesso! Redirecionando...");
      setTimeout(() => {
        window.location.href = "/login"; // Redireciona para login
      }, 2000);
    } catch (err) {
      console.error(err?.response ? err.response.data : err);
      if (err.response && err.response.data) {
        setError(
          err.response.data.detail || "Cadastro falhou. Verifique suas credenciais."
        );
      } else {
        setError("Erro de rede. Tente novamente mais tarde.");
      }
    }
  };

  return (
    <section className="flex w-screen">
      <div className="bg-[#061A23] md:w-[840px] h-screen">
        <img
          className="hidden md:flex absolute w-[580px] h-auto max-w-none 2xl:w-[680px]"
          src="./detective.png"
          alt="Imagem Ilustrativa"
        />
      </div>

      <div className="flex items-center justify-center bg-[#DAF1DE] w-2/2 h-screen">
        <form onSubmit={handleSubmit} className="p-5">
          <h1 className="text-5xl font-semibold">Faça seu cadastro</h1>

          <Input
            className="mt-5"
            placeholder="Digite seu nome"
            type="text"
            value={nome}
            onChange={(e) => setName(e.target.value)}
          >
            <User2 color="#DAF1DE" />
          </Input>
          <Input
            className="mt-5"
            placeholder="Digite seu username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            <User2 color="#DAF1DE" />
          </Input>

          <Input
            className="mt-5"
            placeholder="Digite seu e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            <Mail color="#DAF1DE" />
          </Input>

          <Input
            className="mt-5"
            placeholder="Digite sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            <RectangleEllipsis color="#DAF1DE" />
          </Input>

          <Input
            className="mt-5 mb-2"
            placeholder="Confirme sua senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          >
            <RectangleEllipsis color="#DAF1DE" />
          </Input>

          {error && <p className="text-center text-sm   text-red-400">{error}</p>}
          {success && <p className="text-center text-sm   text-green-500">{success}</p>}

          <Button className="mt-5" name="Cadastre-se" />
        </form>
      </div>
    </section>
  );
}

export default Cadastro;
