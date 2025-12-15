import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandFieldService = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>Field Service</h1>
          <div className="box-p">
            <p>
            "Asseguramos um alto padrão de serviços de Field Service graças à sua eficiente gestão operacional, ampla abrangência nacional, compromissos agressivos em relação aos Acordos de Nível de Serviço (SLAs), profissionais altamente qualificados e custos bem ajustados."
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

export default HeadbandFieldService


