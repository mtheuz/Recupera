import { Mail, RectangleEllipsis } from "lucide-react";
import { Input } from "../ui/components/Input";
import { Button } from "../ui/components/Button";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
  
    const data = new URLSearchParams({ email, password });
  
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/token",
        data,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
  
      const { access_token: token } = response.data;
  
      if (token) {
        localStorage.setItem("token", token); 
      }
  
      try {
        const userResponse = await axios.get("http://127.0.0.1:8000/user/", {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        if (userResponse.data) {
          localStorage.setItem("user", JSON.stringify(userResponse.data));
          setUser(userResponse.data);
        }
      } catch (userError) {
        console.error("Erro ao obter informações do usuário:", userError);
        setError("Falha ao carregar informações do usuário.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Credenciais inválidas ou erro no servidor.");
    }
  };
  
  
  return (
    <section className="flex w-screen">
      <div className="bg-[#061A23] md:w-[840px] h-screen">
        <img
          className="hidden md:flex absolute  w-[580px] h-auto max-w-none 2xl:w-[680px]"
          src="./detective.png"
          alt=""
        />
      </div>

      <div className="flex items-center justify-center bg-[#DAF1DE]  w-2/2 h-screen ">
        <form onSubmit={handleSubmit}  className="p-5  ">
          <h1 className="text-5xl font-semibold">Faça login</h1>
          <Input className="mt-10" placeholder="Digite seu e-mail" type="email" value={email} onChange={ (e) => setEmail(e.target.value)}>
            <Mail color="#DAF1DE" />
          </Input>

          <a className="flex justify-end w-full my-2 text-sm text-end cursor-pointer text-[#235347]">
            Esqueceu sua senha?
          </a>
          <Input  placeholder="Digite sua senha" type="password" value={password} onChange={ (e) => setPassword(e.target.value)} >
            <RectangleEllipsis color="#DAF1DE" />
          </Input>
          <Button className="mt-10" name="Logar"/>
          <p className="mt-10 text-sm text-center text-[#235347]">
            Não possui uma conta?{" "}
            <a href="/cadastro" className="font-bold cursor-pointer">
              Cadastre-se
            </a>
          </p>
        </form >
      </div>
    </section>
  );
}

export default Login;
