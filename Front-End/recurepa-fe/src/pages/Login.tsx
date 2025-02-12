import { Mail, RectangleEllipsis } from "lucide-react";
import { Input } from "../ui/components/Input";
import { Button } from "../ui/components/Button";
import { useState } from "react";

function Login() {
  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e :React.FormEvent) => {
    e.preventDefault()
    const formBody = {
      email: email,
      password : password
    }
  }
  return (
    <section className="flex w-screen">
      <div className="bg-[#061A23] md:w-[840px] h-screen">
        <img
          className="hidden md:flex absolute  w-[580px] h-auto max-w-none"
          src="./detective.png"
          alt=""
        />
      </div>

      <div className="flex items-center justify-center bg-[#DAF1DE]  w-2/2 h-screen">
        <form onSubmit={handleSubmit}  className="p-5  ">
          <h1 className="text-5xl font-semibold">Faça login</h1>
          <Input className="mt-10" placeholder="Digite seu e-mail" type="email" value={email} onChange={ (e) => setEmail(e.target.value)}>
            <Mail color="#DAF1DE" />
          </Input>

          <p className="mt-5 mb-2 text-sm text-end  text-[#235347]">
            Esqueceu sua senha?
          </p>
          <Input  placeholder="Digite sua senha" type="password" value={password} onChange={ (e) => (e.target.value)} >
            <RectangleEllipsis color="#DAF1DE" />
          </Input>
          <Button name="Logar"/>
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
