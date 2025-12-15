import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import HeadbandBlack from "../../components/Headband/HeadbandBlackFriday"
import Cronometro from "../../components/Cronometro"
import "./black.css"
import bitdefender from "../../assets/blackfriday/blackbitdefender.png"
import migracao from "../../assets/blackfriday/blackmigração.png"
import ssd from "../../assets/blackfriday/blackssd.png"


const BlackFriday = () => {



    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />

            <HeadbandBlack />
            <Cronometro />

            <div id="blackFriday">
                <center><h1 className="p-4">Aproveite nossas promoções de <br /> BLACK FRIDAY!</h1><br />

                </center>

                <div className="container">
                    <div className="row m-4 p-4 bgblack">
                        <div className="col-md-6">
                            <center><h5>Bitdefender GravityZone Business Security - Proteção por R$ 70,99</h5>
                                <p>
                                    Garanta a segurança digital dos seus dispositivos nesta Black Friday com o Bitdefender! Proteja seus dados contra ameaças online, mantenha sua privacidade e navegue com total tranquilidade. Não deixe a segurança do seu dispositivo em segundo plano — aproveite esta oferta exclusiva e obtenha uma proteção robusta por um preço imperdível. Reforce sua defesa digital agora mesmo! Plano anual para até 5 dispositivos por apenas <strong>R$ 70,99.</strong> Não perca essa oportunidade!
                                </p>
                                <div className="black">
                                    <button>
                                        <Link to="https://bd6d431.paginas.site/blackfriday" target="_blank">CONTATE-NOS</Link>
                                    </button>
                                </div>
                            </center>
                        </div>
                        <div className="col-md-6 ">
                            <center><img src={bitdefender} className="img-fluid" width={"300px"} alt="" /></center>
                        </div>
                    </div>
                    <div className="row m-4 p-4">
                        <div className="col-md-6">
                            <center><img src={ssd} className="img-fluid" width={"300px"} alt="" /></center>
                        </div>
                        <div className="col-md-6">
                            <center> <h5>SSD Externo 960GB USB 3.0 por apenas R$  480,99 na Black Friday!</h5>
                                <p>
                                Aproveite o desconto imperdível e libere o poder da velocidade e eficiência com este incrível upgrade para o seu sistema. Armazene mais, carregue arquivos rapidamente e eleve seu desempenho a um novo patamar. Não perca tempo — esta oferta relâmpago é válida apenas durante a Black Friday!
                                </p>
                                <div className="black">
                                    <button>
                                        <Link to="https://bd6d431.paginas.site/blackfriday" target="_blank">CONTATE-NOS</Link>
                                    </button>
                                </div>
                            </center>
                        </div>
                    </div>
                    <div className="row m-4  p-4 bgblack">
                        <div className="col-md-6">
                            <center><h5>Migrar para o Microsoft 365 da TC do Brasil nunca foi tão vantajoso!</h5>
                                <p>
                                Aproveite valores incríveis e ganhe 100% de desconto na migração e no suporte para suas contas de e-mail.<br></br>

                                    Já possui Microsoft 365 ou Exchange Online? Você também pode participar! Traga suas contas para o Microsoft 365 da TC do Brasil e tenha suporte gratuito para suas licenças, além de treinamentos completos para seus usuários.<br></br>

                                    Não perca essa oportunidade de ter um serviço completo e eficiente para suas necessidades de e-mail corporativo!
                                </p>
                                <div className="black">
                                    <button>
                                        <Link to="https://bd6d431.paginas.site/blackfriday" target="_blank">CONTATE-NOS</Link>
                                    </button>
                                </div>
                            </center>

                        </div>
                        <div className="col-md-6">
                            <center> <img src={migracao} className="img-fluid" width={"300px"} alt="" /></center>
                        </div>
                    </div>

                    
                  
                    
                    


                </div>



            </div>




            <Footer />
        </>
    )
}

export default BlackFriday