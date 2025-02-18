// useAuth.ts
import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';

interface User {
    id: number;
    username: string;
    email: string;
}

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    const login = async (username: string, password: string) => {
        if (!username || !password) {
            setError("Por favor, preencha todos os campos.");
            return;
        }

        const data = new URLSearchParams({ username, password });

        try {
            const response = await axios.post(
                "http://127.0.0.1:8001/auth/token",
                data,
                {
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                }
            );

            const { access_token: token } = response.data;

            if (token) {
                Cookies.set('authToken', token, { expires: 0.5 });

                try {
                    const userResponse = await axios.get<User>("http://127.0.0.1:8001/user/", {
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
            }
        } catch (loginError) {
            const error = loginError as AxiosError;
            console.error("Erro ao fazer login:", error.response?.data || error.message);
            setError("Credenciais inválidas ou erro no servidor.");
        }
    };

    const logout = () => {
        Cookies.remove('authToken');
        localStorage.removeItem("user");
        setUser(null);
        setError(null);
    };

    return { user, error, login, logout };
};