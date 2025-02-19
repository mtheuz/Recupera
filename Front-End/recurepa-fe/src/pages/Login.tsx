import { AtSign, Lock } from "lucide-react";
import { Input } from "../ui/components/Input";
import { Button } from "../ui/components/Button";
import { useState } from "react";
import { useAuth } from '../hooks/useAuth';
import { Toaster } from "react-hot-toast";

function Login() {
  const { login, error } = useAuth();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault()
    await login(username,password)
  }
  
  return (
    <section className="flex w-screen">
      <Toaster
        position="bottom-center"
        toastOptions={{
          
        }}/>
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
          <Input className="mt-10" placeholder="Digite seu e-mail" type="text" value={username} onChange={ (e) => setUsername(e.target.value)}>
            <AtSign color="#DAF1DE" />
          </Input>

          <a className="flex justify-end w-full my-2 text-sm text-end cursor-pointer text-[#235347]">
            Esqueceu sua senha?
          </a>
          <Input  placeholder="Digite sua senha" type="password" value={password} onChange={ (e) => setPassword(e.target.value)} >
            <Lock color="#DAF1DE" />
          </Input>
          {error && <p style={{ color: "red" }}>{error}</p>}
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
