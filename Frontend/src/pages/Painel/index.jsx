import React, { useState, useEffect } from "react";
import "./painel.css";
import Header from "../../components/Header";
import { API_BASE_URL } from "../../config/api";

const Painel = () => {
    const [vagas, setVagas] = useState([]); 
    const [novaVaga, setNovaVaga] = useState({ titulo: "", descricao: "", beneficio:"", vinculo: "", salario: "", local: "" }); 
    const [editando, setEditando] = useState(false); 
    const [vagaEditada, setVagaEditada] = useState(null); 
    const [mensagem, setMensagem] = useState(""); 
    const [erro, setErro] = useState("");

    // Função para listar as vagas do backend
    const listarVagas = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/vagas`);
            if (!response.ok) {
                throw new Error("Erro ao carregar vagas");
            }
            const data = await response.json();
            setVagas(data); 
        } catch (error) {
            console.error("Erro ao listar vagas:", error);
            setErro("Erro ao carregar vagas. Tente novamente.");
        }
    };

    // Carrega as vagas ao montar o componente
    useEffect(() => {
        listarVagas(); 
    }, []);

    // Função para adicionar nova vaga
    const adicionarVaga = async () => {
        try {
            setErro("");
            setMensagem("");
            
            const response = await fetch(`${API_BASE_URL}/api/vagas`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novaVaga), // Envia os dados da nova vaga
            });

            if (!response.ok) {
                throw new Error("Erro ao salvar vaga");
            }

            const data = await response.json();
            if (data.success) {
                setMensagem("Vaga adicionada com sucesso!");
                setNovaVaga({ titulo: "", descricao: "", beneficio:"", vinculo: "", salario: "", local: "" }); // Limpa os campos após adicionar
                listarVagas(); // Recarrega a lista de vagas
                setTimeout(() => setMensagem(""), 3000); // Remove a mensagem após 3 segundos
            } else {
                setErro(data.error || "Erro ao adicionar vaga");
            }
        } catch (error) {
            console.error("Erro ao adicionar vaga:", error);
            setErro("Erro ao salvar vaga. Verifique sua conexão e tente novamente.");
        }
    };

    // Função para editar uma vaga
    const editarVaga = async () => {
        try {
            setErro("");
            setMensagem("");
            
            const response = await fetch(`${API_BASE_URL}/api/vagas/${vagaEditada.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novaVaga), 
            });

            if (!response.ok) {
                throw new Error("Erro ao atualizar vaga");
            }

            const data = await response.json();
            if (data.success) {
                setMensagem("Vaga atualizada com sucesso!");
                setEditando(false); 
                setVagaEditada(null);
                setNovaVaga({ titulo: "", descricao: "", beneficio:"", vinculo: "", salario: "", local: "" }); 
                listarVagas(); // Recarrega a lista de vagas
                setTimeout(() => setMensagem(""), 3000); // Remove a mensagem após 3 segundos
            } else {
                setErro(data.error || "Erro ao atualizar vaga");
            }
        } catch (error) {
            console.error("Erro ao editar vaga:", error);
            setErro("Erro ao salvar alterações. Verifique sua conexão e tente novamente.");
        }
    };

    // Função para excluir uma vaga
    const excluirVaga = async (vagaParaExcluir) => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/vagas/${vagaParaExcluir.id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Erro ao excluir vaga");
            }
            const data = await response.json();
            if (data.success) {
                setMensagem("Vaga excluída com sucesso!");
                listarVagas(); // Recarrega a lista de vagas
                setTimeout(() => setMensagem(""), 3000);
            }
        } catch (error) {
            console.error("Erro ao excluir vaga:", error);
            setErro("Erro ao excluir vaga. Tente novamente.");
        }
    };

    // Função para preencher os campos do formulário de edição
    const preencherFormulario = (vaga) => {
        setNovaVaga(vaga);
        setVagaEditada(vaga);
        setEditando(true); // 
    };

    return (

        <>
        <Header/>
        <div id="painel">
            <h1>Painel de Gerenciamento de Vagas</h1>

            {/* Formulário para adicionar ou editar vaga */}
            <div>
                <h2>{editando ? "Editar Vaga" : "Adicionar Vaga"}</h2>
                {mensagem && <p style={{ color: "green", fontWeight: "bold" }}>{mensagem}</p>}
                {erro && <p style={{ color: "red", fontWeight: "bold" }}>{erro}</p>}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        editando ? editarVaga() : adicionarVaga();
                    }}
                >
                    <div>
                        <label>Título</label>
                        <input type="text" value={novaVaga.titulo} onChange={(e) => setNovaVaga({ ...novaVaga, titulo: e.target.value })} required />
                    </div>
                    
                    <div>
                        <label>Descrição da Vaga</label><br />
                        <textarea cols={58} rows={5} type="text" value={novaVaga.descricao} onChange={(e) => setNovaVaga({ ...novaVaga, descricao: e.target.value })} required />
                    </div>
                    <div>
                        <label>Beneficios</label><br />
                        <textarea cols={58} rows={5} type="text" value={novaVaga.beneficio} onChange={(e) => setNovaVaga({ ...novaVaga, beneficio: e.target.value })} required />
                    </div>

                    <div className="row">
                        <div className="col-md-6">

                            <label>Vínculo</label>
                            <input type="text" value={novaVaga.vinculo} onChange={(e) => setNovaVaga({ ...novaVaga, vinculo: e.target.value })} required />

                        </div>
                        <div className="col-md-6">

                            <label>Salário</label>
                            <input type="text" value={novaVaga.salario} onChange={(e) => setNovaVaga({ ...novaVaga, salario: e.target.value })} placeholder="R$" required />

                        </div>
                    </div>
                    <div>
                        <label>Localização</label>
                        <input type="text" value={novaVaga.local} onChange={(e) => setNovaVaga({ ...novaVaga, local: e.target.value })} required />
                    </div>
                   <center> <button type="submit">{editando ? "Salvar" : "Adicionar"}</button></center>
                </form>
            </div>

            {/* Lista de vagas */}
            <div>
                <h2>Vagas Cadastradas</h2>
                <div className="container">
                    <div className="row">
                        {vagas.length === 0 ? (
                            <p>Não há vagas cadastradas.</p>
                        ) : (
                            vagas.map((vaga, index) => (
                                <div key={index} className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{vaga.titulo}</h5>

                                            <label htmlFor=""> Localização</label>
                                            <pre className="card-text ">{vaga.local}</pre>

                                            <label htmlFor=""> Descrição da vaga</label>
                                            <pre className="card-text">{vaga.descricao}</pre>

                                            <label htmlFor=""> Beneficios</label>
                                            <pre className="card-text">{vaga.beneficio}</pre>

                                            <label htmlFor=""> Remuneração</label>
                                            <pre className="card-text"><strong>R$ {vaga.salario}</strong></pre>

                                            <label htmlFor=""> Vinculo:</label>
                                            <pre className="card-text">{vaga.vinculo}</pre>
                                            
                                            <div className="linha">
                                                <button className="btn btn-warning" onClick={() => preencherFormulario(vaga)}>Editar</button>
                                                <button className="btn btn-danger" onClick={() => excluirVaga(vaga)}>Excluir</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

        </div>
        </>
      

    );
};

export default Painel;
