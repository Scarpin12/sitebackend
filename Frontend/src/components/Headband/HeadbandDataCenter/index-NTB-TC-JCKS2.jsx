import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandDataCenter = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>Gestão de Data Center</h1>
          <div className="box-p">
            <p>
            "Dentro de nosso portfólio, a TC do Brasil disponibiliza soluções para auxiliar gestores na concepção, implementação e operação de serviços personalizados para ambientes de Data Center e infraestruturas de comunicação."
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

export default HeadbandDataCenter


