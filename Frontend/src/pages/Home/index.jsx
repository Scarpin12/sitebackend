import React, { useEffect } from "react";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import 'animate.css';
import './home.css';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeLowVision } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import mundotech from "../../assets/mundotech.png"

import mulher from "../../assets/mulher.png"
import logo from "../../assets/logo.png"
import Slide from "../../components/Slide"





const Home = () => {



    useEffect(() => {
        window.scrollTo(0, 0);
        
        window.addEventListener('load', startCounters);
        function startCounters() {
            const counters = document.querySelectorAll('[id^="contador"]');
            counters.forEach((counter, index) => {
                const targetValue = parseInt(counter.innerText, 10);
                let currentValue = 0;
                const increment = targetValue / 100;
                const interval = setInterval(() => {
                    currentValue += increment;
                    counter.innerText = currentValue.toFixed(0);
                    if (currentValue >= targetValue) {
                        counter.innerText = targetValue;
                        clearInterval(interval);
                    }
                }, 30);
            });
        }

        

    }, []); 


    

    return (
        <>
            <Header />

           

           
           


            <div className="bg">
                <div className="container">
                    <img src={logo} width={"200px"} alt="" />
                    <h1>Tecnologia para conectar</h1>
                    <h2>Como podemos te surpreender hoje?</h2>
                    <div className="a">
                        <Link to="https://api.whatsapp.com/send/?phone=5511913155845&text&app_absent=0"> CONSULTE NOSSOS ESPECIALISTAS</Link>
                    </div>
                </div>
            </div>




            <div className="dados">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 txt-align">
                            <h4><span id="contador1">17</span> <br />
                                Anos de história</h4>
                        </div>
                        <div className="col-md-3 txt-align">
                            <h4><span id="contador2">5</span> <br />
                                Empresas no grupo</h4>
                        </div>
                        <div className="col-md-3 txt-align">
                            <h4><span id="contador3">+9000</span> <br />
                                Projetos entregues</h4>
                        </div>
                        <div className="col-md-3 txt-align">
                            <h4><span id="contador4">+150000</span> <br />
                                Usuários atendidos</h4>
                        </div>
                    </div>
                </div>
            </div>



            <div className="barra">
                <div  className="roww colum">
                    <div className="col-md-9">
                        <h3>Estamos presentes em <span>todo o Brasil.</span></h3>
                        <p>Se a sua operação é critica, conseguimos lhe atender em
                            qualquer lugar do Brasil, independente de sua cidade ou estado!<br />
                            Dessa forma, você não precisa lidar com várias empresas de
                            tecnologia ou contratar equipes internas para esse fim, pois <br />
                            nós vamos onde você estiver!<br />
                        </p>
                        <button>
                            <Link to="https://9484636.paginas.site/entreemcontato" target="_blank">ENTRE EM CONTATO</Link>
                        </button>

                    </div>
                    <div className="col-md-3">
                        <img src={mundotech} className="align-top" width={"300px"} alt="" />
                    </div>
                </div>
            </div>

            <div className="bemvindo">
                <div className="container cont">
                    <div className="titulo">
                        <h1>Bem-Vindo a TC do Brasil</h1>
                    </div>

                    <div className="row">
                        <div className="col-md-6 align">
                            <img src={logo} className="align-top" width={"300px"} alt="" />
                        </div>

                        <div className="col-md-6 align">
                            <p>
                                No <b>Grupo TC do Brasil</b> somos guiados pela verdade, autenticidade e responsabilidade.<br /><br />

                                Nossos valores regem a motivação de nossos colaboradores, pois buscamos ser reconhecidos como melhores fornecedores de serviços de TI por nossos clientes.<br /><br />

                                Nossa cultura empresarial é sustentada num modelo de gestão focada no cliente, onde a confiança será o valor na qual mais damos importancia.<br /><br />

                                Alem é claro de garantirmos um serviço de qualidade sempre atendendo a demanda de nossos clientes.
                            </p>

                        </div>
                    </div>

                </div>
            </div>

            <div className="pqescolher">

                <h2>Porque nos escolher?</h2>
                <p>O<b> Grupo TC do Brasil</b> é uma empresa prestadora de serviços especializada em TI.</p>

                <div className="box">
                    <div className="box1 animate__animated animate__pulse animate__delay-4s animate__repeat-3">
                        <FontAwesomeIcon icon={faObjectGroup} size="2xl" /><br />
                        <h4>Missão</h4>
                        <p>“Ser o melhor parceiro para nossos clientes, oferecendo serviços de qualidade e atendimento diferenciado.”</p>
                    </div>
                    <div className="box1 animate__animated animate__pulse animate__delay-4s animate__repeat-3 ">
                        <FontAwesomeIcon icon={faEyeLowVision} size="2xl" /><br />
                        <h4>Visão</h4>
                        <p>"Ser a melhor empresa em Serviços Gerenciados de TI.”</p>
                    </div>
                    <div className="box1 animate__animated animate__pulse animate__delay-4s animate__repeat-3">
                        <FontAwesomeIcon icon={faGem} size="2xl" /><br />
                        <h4>Valores</h4>
                        <p>“Nossos valores são Transparência, Honestidade, Comprometimento, Inteligência e Parceria”</p>
                    </div>
                </div>
            </div>


            <div className="clientes">
                <div className="titulo">
                    <h1>Alguns de nossos clientes</h1>
                    <p>Conheça um pouco de nossos serviços por alguns de nossos clientes</p>
                </div>

                <Slide/>

             {/*    <div className="container">
                    <div className="roww colum">
                        <div className="col-md-2">
                            <img src={almaviva} className="img-fluid" width={"200px"} alt="" />
                        </div>
                        <div className="col-md-2">
                            <img src={almawave} className="img-fluid" width={"200px"} alt="" />
                        </div>
                        <div className="col-md-2">
                            <img src={ambev} className="img-fluid" width={"200px"} alt="" />
                        </div>
                        <div className="col-md-2">
                            <img src={awr} className="img-fluid" width={"200px"} alt="" />
                        </div>
                        <div className="col-md-2">
                            <img src={sesi} className="img-fluid" width={"200px"} alt="" />
                        </div>
                        <div className="col-md-2">
                            <img src={lbs} className="img-fluid" width={"200px"} alt="" />
                        </div>
                    </div>
                </div> */}
            </div>

            <div className="faixa">

                <div className="container">
                    <div className="roww colum">
                        <div className="col-md-9 h1">
                            <h1>Soluções e serviços para sua empresa se preocupar <br />
                                somente com seu negócio!</h1>

                        </div>
                        <div className="col-md-3">
                            <img src={mulher} width={"280px"} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="soluções">
                <div className="titulo2">
                    <h1>Nossas Soluções</h1>
                    <p>Possuimos a solução ideal para o tamanho do seu negócio!</p>
                </div>

                <div className="solutions">
                    <div className="boxlg">
                        <div className="cx1">
                            <FontAwesomeIcon icon={faComputer} size="2xl" style={{ color: "#005eff", }} /><br />
                            <h5>Locação de<br />
                                computadores</h5>
                            <p>Com a locação de computadores, é
                                possivel ter á sua disposição maior
                                agilidade e abrangencia de tarefas,
                                tudo isso graças a alta possibilidade
                                de customização desses equipamentos.</p>
                        </div>
                        <div className="cx1">
                            <FontAwesomeIcon icon={faLaptop} size="2xl" style={{ color: "#005eff", }} /><br />
                            <h5>Locação de<br />
                                Notebooks</h5>
                            <p>A Locação de Notebooks da TC do Brasil permite que a sua empresa conte com equipamentos de ponta sem comprometer suas finanças com altos custos da aquisição de aparelhos</p>
                        </div>
                        <div className="cx1">
                            <FontAwesomeIcon icon={faLaptop} size="2xl" style={{ color: "#005eff", }} /><br />
                            <h5>Locação de<br />
                                Chromebooks</h5>
                            <p>Os Chromebooks são ideais para tarefas simples, oferecendo praticidade, leveza e comodidade onde quer que estejam principalmente no ambiente educacional</p>
                        </div>
                        <div className="cx1">
                            <FontAwesomeIcon icon={faServer} size="2xl" style={{ color: "#005eff", }} /><br />
                            <h5>Locação de<br />
                                Servidores</h5>
                            <p>Maior segurança e menos preocupação com a segurança dos dados de sua empresa. Oaluguel de servidores é ideal para empresas de todos os tipos e tamanhos.</p>
                        </div>
                    </div>
                    <div className="boxlg">
                        <div className="cx1">
                            <FontAwesomeIcon icon={faWifi} size="2xl" style={{ color: "#005eff", }} /><br />
                            <h5>Locação de Rotadores<br />
                                e Access Point</h5>
                            <p>Atuamos para que seu evento possa contar com o melhor que a tecnologia tem a oferecer. Além disso, nosso atendimento rápido permite a resolução de problemas em tempo recorde, garantindo o bom andamento do seu evento.</p>
                        </div>
                        <div className="cx1">
                            <FontAwesomeIcon icon={faCalendarCheck} size="2xl" style={{ color: "#005eff", }} /><br />
                            <h5>TI para eventos</h5>
                            <p>Atuamos para que seu evento possa contar com o melhor que a tecnologia tem a oferecer. Além disso, nosso atendimento rápido permite a resolução de problemas em tempo recorde, garantindo o bom andamento do seu evento.</p>
                        </div>
                        <div className="cx1">
                            <FontAwesomeIcon icon={faLaptopCode} size="2xl" style={{ color: "#005eff", }} /><br />
                            <h5>Outsourcing de TI</h5>
                            <p>Com Outsourcing de TI, você deixa a gestão de tecnologia com uma empresa especialista no assunto, permitindo que a sua empresa mantenha o foco no que realmente importa para o seu negócio.</p>
                        </div>
                        <div className="cx1">
                            <FontAwesomeIcon icon={faKeyboard} size="2xl" style={{ color: "#005eff", }} /><br />
                            <h5>Consultoria em TI</h5>
                            <p>A nossa consultoria atende as necessidades de cada cliente, analisando cada caso individualmente e garantindo resultadis dentro da sua realidade.</p>
                        </div>
                    </div>
                    <div className="boxlg">
                        <div className="cx1">
                            <FontAwesomeIcon icon={faCloud} size="2xl" style={{ color: "#005eff", }} /><br />
                            <h5>Cloud e Segurança</h5>
                            <p>O armazenamento em nuvem se torna cada vez mais popular por sua praticidade. Trabalhamos com processos seguros, garantindo que seus dados estão protegidos.</p>
                        </div>
                        <div className="cx1">
                            <FontAwesomeIcon icon={faMicrosoft} size="2xl" style={{ color: "#005eff", }} /><br />
                            <h5>Office 365 </h5>
                            <p>Trabalhamos com o Office 365 a versão online da suite de aplicativos para escritório da Microsoft, focado no trabalho  colaborativo simultâneo de grandes equipes.</p>
                        </div>
                        <div className="cx1">
                            <FontAwesomeIcon icon={faDatabase} size="2xl" style={{ color: "#005eff", }} /><br />
                            <h5>Datacenter</h5>
                            <p>Temos expertise em datacenters para hospedar aplicações e informações criticas da sua empresa. Configuramos e monitoramos servidores, cuidando para que o seus serviços estejam em pleno funcionamento.</p>
                        </div>
                        <div className="cx1">
                            <FontAwesomeIcon icon={faMicrochip} size="2xl" style={{ color: "#005eff", }} /><br />
                            <h5>Infraestrutura de TI</h5>
                            <p>Além de contar com os melhors equipamentos eé importante ter uma boa infraestrutura de TI. O fornecimento de roteadores, access point e a realização de serviços como o cabeamento estruturado são essenciais para que você possa aproveitar ao máximo o potencial dos seus equipamentos.</p>
                        </div>
                    </div>



                </div>

            </div>

            <Footer />

        </>

    )



}
export default Home