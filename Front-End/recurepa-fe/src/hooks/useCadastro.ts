// useCadastro.ts
import { useState } from "react";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

interface CadastroData {
  nome: string;
  username: string;
  email: string;
  password: string;
}

export const useCadastro = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (
    event: React.FormEvent,
    { nome, username, email, password, confirmPassword }: CadastroData & { confirmPassword: string }
  ) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    // Validação dos campos
    if (!nome || !username || !email || !password || !confirmPassword) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("As senhas não correspondem.");
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      toast.error("E-mail inválido.");
      return;
    }

    const data: CadastroData = { nome, username, email, password };

    try {
      await axios.post("http://127.0.0.1:8001/user/", data);
      toast.success("Cadastro realizado com sucesso! Redirecionando...");
      setTimeout(() => {
        window.location.href = "/login"; // Redireciona para login
      }, 2000);
    } catch (err) {
      if ((err as AxiosError).response && (err as AxiosError).response?.data) {
        toast.error(
          (err as AxiosError).response?.data.detail ||
            "Cadastro falhou. Verifique suas credenciais."
        );
      } else {
        toast.error("Erro de rede. Tente novamente mais tarde.");
      }
    }
  };

  return { error, success, handleSubmit };
};