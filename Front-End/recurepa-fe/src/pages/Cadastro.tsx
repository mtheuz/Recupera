import { Mail, RectangleEllipsis, User2 } from "lucide-react";
import { Input } from "../ui/components/Input";
import { Button } from "../ui/components/Button";
import { useState } from "react";

function Cadastro() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

  const handleSubmit = (e :React.FormEvent) => {
    e.preventDefault()
    const formBody = {
      username :username,
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
        <form onSubmit={handleSubmit} className="p-5  ">
          <h1 className="text-5xl font-semibold">Faça seu cadastro</h1>
          <Input className="mt-5" placeholder="Digite seu username" type="email" value={username} onChange={ (e) => setUsername(e.target.value)}>
            <User2 color="#DAF1DE" />
          </Input>
          <Input className="mt-5"  placeholder="Digite seu e-mail" type="email" value={email} onChange={ (e) => setEmail(e.target.value)}>
            <Mail color="#DAF1DE" />
          </Input>
          <Input className="mt-5"  placeholder="Digite sua senha" type="password" value={password} onChange={ (e) => setPassword(e.target.value)}>
            <RectangleEllipsis color="#DAF1DE" />
          </Input>
          <Input className="mt-5"  placeholder="Confirme sua senha" type="password" value={confirmPassword} onChange={ (e) => setconfirmPassword(e.target.value)}>
            <RectangleEllipsis color="#DAF1DE" />
          </Input>
          <Button name="Cadastre-se"/>
        </form>
      </div>
    </section>
  );
}

export default Cadastro;
