import React, { useEffect } from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Formulario from "../../components/Formulario"
import HeadbandContato from "../../components/Headband/HeadbandContato"
import "./contato.css"



const Contato = () => {

    
      


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (

        <>
            <Header />

            <HeadbandContato />

            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-4 mb-4 estilizacao">
                        <h4>Matriz Santo André</h4>

                        <p>Rua Gertrudes de Lima, 53 -7º Andar<br />
                            Conj 74 - Santo André - SP<br />
                        </p>
                        <p><b>CEP: </b>09020-000 <br />
                            <b>Tel: </b>(11) 4990-544<br />
                            <b>E-mail: </b><a href="mailto:contato@tcdobrasil.com.br">contato@tcdobrasil.com.br</a>
                        </p>
                        <br />

                        <h4>Filial Paulista</h4>

                        <p>Avenida Paulista 2421 - 1º Andar<br />
                            Bela Vista - São Paulo - SP<br />
                        </p>
                        <p><b>CEP: </b> 01311-300<br />
                            <b>Tel: </b>(11) 4990-544<br />
                            <b>E-mail: </b><a href="mailto:contato@tcdobrasil.com.br">contato@tcdobrasil.com.br</a>
                        </p>




                    </div>
                    <div className="col-md-7">

                        
                       <Formulario/>

                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default Contato