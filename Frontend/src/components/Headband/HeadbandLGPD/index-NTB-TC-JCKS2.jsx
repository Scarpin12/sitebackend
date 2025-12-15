import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandLGPD = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>LGPD - Lei Geral de Proteção de Dados</h1>
          <div className="box-p">
            <p>
            "Aproveite a expertise de nossa equipe de especialistas em LGPD para uma análise completa, abrangendo tanto os aspectos jurídicos quanto tecnológicos. Isso permitirá que sua empresa identifique todos os riscos e vulnerabilidades presentes em suas operações."
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

export default HeadbandLGPD


