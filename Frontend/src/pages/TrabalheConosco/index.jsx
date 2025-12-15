import React, { useState, useEffect } from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import HeadbandTrabalheconosco from "../../components/Headband/HeadbandTrabalheConosco"
import { API_BASE_URL } from "../../config/api"
import "./trabalheconosco.css"

const TrabalheConosco = () => {
    const [vagas, setVagas] = useState([]); // Estado para armazenar as vagas

    // Função para buscar as vagas do backend
    const listarVagas = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/vagas`);
            if (!response.ok) {
                throw new Error("Erro ao carregar vagas");
            }
            const data = await response.json();
            setVagas(data); // Atualiza o estado com as vagas retornadas
        } catch (error) {
            console.error("Erro ao carregar vagas:", error);
        }
    };

    // State para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
        area: "",
        documento: null,
        menssage: "",
    });

    // Função para lidar com a mudança dos campos do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Função para enviar o formulário
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Envia os dados para a rota do backend
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("tel", formData.tel);
        formDataToSend.append("area", formData.area);
        formDataToSend.append("menssage", formData.menssage);
    
        if (formData.documento) {
            formDataToSend.append("documento", formData.documento);
        }
    
        try {
            const response = await fetch(`${API_BASE_URL}/api/enviar-formulario`, {
                method: "POST",
                body: formDataToSend, 
            });

            if (!response.ok) {
                throw new Error("Erro ao enviar formulário");
            }
    
            const data = await response.json();
            if (data.success) {
                alert("Formulário enviado com sucesso!");
                setFormData({ name: "", email: "", tel: "", area: "", documento: null, menssage: "" });
            } else {
                alert(data.message || "Erro ao enviar formulário. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao enviar formulário. Verifique sua conexão e tente novamente.");
        }
    };

    // Carregar as vagas ao montar o componente
    useEffect(() => {
        listarVagas();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <HeadbandTrabalheconosco />

            <center><h1 className="m-4"> Vagas Disponíveis </h1></center>

            <section className="vagas">
                <div className="container">
                    <div className="row">
                        {vagas.length === 0 ? (
                            <p>Não há vagas disponíveis no momento.</p>
                        ) : (
                            vagas.map((vaga, index) => (
                                <div key={index} className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            
                                            <h5 className="card-title">{vaga.titulo}</h5>

                                            <label htmlFor="">Local</label>
                                            <h6 className="card-subtitle mb-2 text-muted">{vaga.local}</h6>

                                            <label htmlFor="">Descrição da vaga</label>
                                            <p className="card-text">{vaga.descricao}</p>

                                            <label htmlFor="">Beneficios</label>
                                            <pre className="card-text">{vaga.beneficio}</pre>

                                            <label htmlFor="">Remuneração</label>
                                            <p className="card-text"><strong>R${vaga.salario}</strong></p>

                                            <label htmlFor="">Vinculo</label>
                                            <p className="card-text"><strong>{vaga.vinculo}</strong></p>

                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            <div className=" mt-4 bgtrabalhe">
                <div className="tituloTrabalheConosco">
                    <center><h2>Quer fazer parte da equipe?</h2></center>
                    <center><p>Preecha o formulário e encaminhe seu currículo!</p></center>
                </div>
                <div className="formulario">
                    <form onSubmit={handleSubmit}>
                        <div className="boxtrabalhe">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nome Completo"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <br />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <br />
                            <input
                                type="tel"
                                name="tel"
                                placeholder="Telefone"
                                value={formData.tel}
                                onChange={handleChange}
                                required
                            />
                            <br />
                            <label htmlFor="area">Área de interesse</label>
                            <br />
                            <select
                                id="area"
                                name="area"
                                value={formData.area || ""}
                                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                                required
                            >
                                <option value="Redes">Redes</option>
                                <option value="Seguranca">SOC</option>
                                <option value="NOC">NOC</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Comercial">Comercial</option>
                                <option value="Administração">Administração</option>
                                <option value="Programação">Programação</option>
                            </select>
                            <br />
                            <label htmlFor="documento">Anexe seu currículo:</label>
                            <br />
                            <input
                                type="file"
                                id="documento"
                                name="documento"
                                accept=".pdf,.doc,.docx"  // Garante que só aceita documentos
                                onChange={(e) => setFormData({ ...formData, documento: e.target.files[0] })}
                            />
                            <br />
                            <textarea
                                cols="30"
                                rows="10"
                                name="menssage"
                                value={formData.menssage}
                                onChange={handleChange}
                                placeholder="Digite aqui em qual vaga tem interesse."
                            />
                            <br />
                        </div>
                        <div className="bntenviar">
                            <input
                                type="hidden"
                                name="_next"
                                target="_blank"
                                value="https://www.tcdobrasil.com.br"
                            />
                            <button type="submit" value="Enviar">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default TrabalheConosco;
