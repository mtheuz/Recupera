// Cadastro.tsx
import { User, AtSign, Mail, Lock, ShieldCheck } from "lucide-react";
import { Input } from "../ui/components/Input";
import { Button } from "../ui/components/Button";
import { useState } from "react";
import { useCadastro } from "../hooks/useCadastro";
import { Toaster } from "react-hot-toast";

function Cadastro() {
  const [username, setUsername] = useState("");
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  const { handleSubmit } = useCadastro();

  return (
    <section className="flex w-screen">
      <Toaster
        position="bottom-center"
        toastOptions={{
          
        }}/>
      <div className="bg-[#061A23] md:w-[840px] h-screen">
        <img
          className="hidden md:flex absolute w-[580px] h-auto max-w-none 2xl:w-[680px]"
          src="./detective.png"
          alt="Imagem Ilustrativa"
        />
      </div>
      <div className="flex items-center justify-center bg-[#DAF1DE] w-2/2 h-screen">
        <form
          onSubmit={(e) =>
            handleSubmit(e, {
              nome,
              username,
              email,
              password,
              confirmPassword,
            })
          }
          className="p-5"
        >
          <h1 className="text-5xl font-semibold text-[#061a23]">Faça seu cadastro</h1>
          <Input
            className="mt-10"
            placeholder="Digite seu nome"
            type="text"
            value={nome}
            onChange={(e) => setName(e.target.value)}
          >
            <User color="#DAF1DE" />
          </Input>
          <Input
            className="mt-5"
            placeholder="Digite seu username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            <AtSign color="#DAF1DE" />
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
            <Lock color="#DAF1DE" />
          </Input>
          <Input
            className="mt-5 mb-2"
            placeholder="Confirme sua senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          >
            <ShieldCheck color="#DAF1DE" />
          </Input>
          <Button className="mt-5" name="Cadastre-se" />
          <p className="mt-10 text-sm text-center text-[#235347]">
            Já posui uma conta?{" "}
            <a href="/login" className="font-bold cursor-pointer">
              Faça o login!
            </a>
          </p>
        </form>
        
      </div>
      
    </section>
  );
}

export default Cadastro;