import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandNOC = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>NOC - Network Operations Center</h1>
          <div className="box-p">
            <p>
            "Os serviços do Centro de Operações de Rede (NOC) foram feitos para oferecer um monitoramento contínuo da rede, operando 24 horas por dia, 7 dias por semana, durante todo o ano."
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

export default HeadbandNOC


