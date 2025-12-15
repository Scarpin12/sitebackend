import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Usado para redirecionar após login
import logo from '../../assets/logo.png';
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../config/api";
import "./login.css";

const Login = () => {
    const [email, setEmail] = useState("");  // Guardar usuário digitado
    const [senha, setSenha] = useState("");      // Guardar senha digitada
    const [erro, setErro] = useState("");        // Para exibir mensagem de erro
    const navigate = useNavigate();              // Usado para navegação entre páginas

    const handleLogin = async (e) => {
        e.preventDefault();  // Previne o comportamento padrão do formulário (recarregar página)
        
        try {
            const response = await fetch(`http://localhost:3000/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha }),
            });

            const data = await response.json();  // Recebe a resposta do servidor

            if (data.sucesso) {
                // Se o login for bem-sucedido, salva o token no localStorage
                sessionStorage.setItem("token", data.token);
                navigate("/painel");  // Redireciona para a página "Painel"
            } else {
                setErro(data.mensagem);  // Exibe mensagem de erro, caso o login falhe
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            setErro("Erro no servidor. Tente novamente.");
        }
    };

    return (
        <>
            <div id="login">
                <div className="box2">
                    <div className="col-md-12">
                        <Link to="/"><img src={logo} width="80px" alt="Logo" /></Link>
                    </div>
                    <div className="col-md-12">
                        <form onSubmit={handleLogin}>
                            {erro && <p style={{ color: "red" }}>{erro}</p>} {/* Exibe a mensagem de erro */}
                            <center><label>Usuário</label></center>
                            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            
                            <center><label>Senha</label></center>
                            <input type="password" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                            <br></br>
                            <button type="submit">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
