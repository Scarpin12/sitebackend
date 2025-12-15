import React, { useEffect } from "react"
import BtnContato from "../../../../components/Contato"
import Header from "../../../../components/Header"
import Footer from "../../../../components/Footer"
import "./lgpd.css"
import HeadbandLGPD from "../../../../components/Headband/HeadbandLGPD"
import lgpd from "../../../../assets/lgpd.webp"


const Contato = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />
            <HeadbandLGPD />
            <div className="container containerh3">
                <h1>Lei Geral de Proteção de Dados Pessoais (LGPD) </h1>

                <p>A Lei Geral de Proteção de Dados Pessoais (LGPD) estabelece diretrizes importantes e obrigatórias para a coleta, processamento e armazenamento de dados pessoais.

                    No Brasil, a LGPD (Lei nº 13.709, de 14/8/2018) entrou em vigor em 18 de setembro de 2020, representando um passo importante para o Brasil. Com isso, passamos a fazer parte de um grupo de países que contam com uma legislação específica para a proteção de dados dos seus cidadãos.

                    Diante dos atuais casos de uso indevido, comercialização e vazamento de dados, as novas regras garantem a privacidade dos brasileiros, além de evitar entraves comerciais com outros países.
                </p>

            </div>

            <div className="projeto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 box-field">
                            <h4>A Importância da Conformidade com a LGPD: Garanta a Privacidade e Confiança</h4>
                            <p>
                                A Lei Geral de Proteção de Dados (LGPD) representa uma revolução nas regulamentações de privacidade de dados no Brasil. Cumprir com os regulamentos da LGPD é essencial para as empresas que desejam garantir a confiança de seus clientes e cumprir suas obrigações legais. Além disso, demonstra um compromisso com a ética e a privacidade dos dados, fatores críticos para o sucesso nos negócios em um mundo cada vez mais orientado pela informação.
                                <br/><br/>
                                A TC do Brasil se destaca como a parceira ideal para empresas que buscam conformidade com a LGPD. Nossa equipe de especialistas em LGPD oferece análises abrangentes que consideram aspectos jurídicos e tecnológicos, identificando os riscos e vulnerabilidades da sua empresa. Mais do que evitar multas, a conformidade com a LGPD permite que sua empresa se destaque como uma guardiã responsável dos dados dos clientes, aumentando a confiança e melhorando sua reputação. Não adie, coloque sua empresa no caminho da conformidade com a LGPD com a TC do Brasil como sua aliada.

                            </p>


                        </div>
                        <div className="col-md-4 box-field-img">
                            <img src={lgpd} width={"650px"} alt="" />


                        </div>
                    </div>
                </div>
            </div>

            <div className="diferenciais">
                <div className="container">
                    <div className="qualidade">
                        <h1>LGPD: Sua Jornada para a Conformidade com a TC do Brasil</h1>
                        <p>
                        Tenha em mente que a conformidade com a LGPD não se limita a uma mera obrigação legal; representa uma oportunidade valiosa para fortalecer a confiança dos seus clientes e consolidar a posição da sua empresa como líder em proteção de dados e privacidade. A TC do Brasil está pronta para acompanhá-lo nessa jornada em direção à conformidade com a LGPD, assegurando que sua empresa esteja devidamente equipada para enfrentar os desafios da era atual de proteção de dados.


                        </p>
                    </div>
                </div>
            </div>

            <BtnContato/>

            <Footer />
        </>
    )
}

export default Contato