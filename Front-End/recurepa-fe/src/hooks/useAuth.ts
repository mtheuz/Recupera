// useAuth.ts
import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

interface User {
  id: number;
  username: string;
  email: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Função para fazer login
  const login = async (username: string, password: string) => {
    if (!username || !password) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    const data = new URLSearchParams({ username, password });

    try {
      // Faz a requisição para obter o token
      const response = await axios.post(
        "http://127.0.0.1:8001/auth/token",
        data,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      const { access_token: token } = response.data;

      if (token) {
        // Salva o token no cookie com expiração de 30 minutos
        Cookies.set('authToken', token, { expires: 0.5, secure: true, sameSite: 'Strict' });

        // Carrega os dados do usuário
        try {
          const userResponse = await axios.get<User>("http://127.0.0.1:8001/user/", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (userResponse.data) {
            localStorage.setItem("user", JSON.stringify(userResponse.data));
            setUser(userResponse.data);
            toast.success("Login realizado com sucesso!");
            window.location.href = "/"

          }
        } catch (userError) {
          console.error("Erro ao obter informações do usuário:", userError);
          toast.error("Falha ao carregar informações do usuário.");
        }
      }
    } catch (loginError) {
      const error = loginError as AxiosError;
      console.error("Erro ao fazer login:", error.response?.data || error.message);
      toast.error("Credenciais inválidas");
    }
  };

  // Função para fazer logout
  const logout = () => {
    Cookies.remove('authToken', { secure: true, sameSite: 'Strict' });
    localStorage.removeItem("user");
    setUser(null);
    setError(null);
    toast.success("Logout realizado com sucesso!");
  };

  // Função para verificar se o usuário está logado
  const checkAuth = async () => {
    const token = Cookies.get('authToken');
    if (!token) {
      setUser(null); // Não há token, então o usuário não está logado
      return false;
    }

    try {
      // Verifica se o token é válido buscando os dados do usuário
      const userResponse = await axios.get<User>("http://127.0.0.1:8001/user/", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (userResponse.data) {
        setUser(userResponse.data); // Define o usuário como logado
        return true;
      }
    } catch (authError) {
      console.error("Erro ao verificar autenticação:", authError);
      toast.error("Sessão expirada ou inválida.");
      Cookies.remove('authToken'); // Remove o token inválido
      localStorage.removeItem("user");
      setUser(null);
    }

    return false;
  };

  // Verificar autenticação ao inicializar o hook
  useEffect(() => {
    checkAuth();
  }, []);

  return { user, error, login, logout, checkAuth };
};