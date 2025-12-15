import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandREDE = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>Gestão de Redes</h1>
          <div className="box-p">
            <p>
            "Otimize seu ambiente de rede com a experiência da TC do Brasil em Gerenciamento de Redes. Mantenha sua infraestrutura funcionando de forma eficaz e confiável, da sala do servidor às estações de trabalho."
            </p>
            <div className="botaoapp">
              <div className="a">
                <Link to="https://api.whatsapp.com/send/?phone=5511913155845&text&app_absent=0"> CONSULTE NOSSOS ESPECIALISTAS</Link>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default HeadbandREDE


