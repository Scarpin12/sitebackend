import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandGoverno = () => {


  useEffect(() => {
  }, [])

  return (

    <>


      <div id="headband">
        <div className="container">
          <h1>Soluções para gestão pública</h1>
          <div className="box-p">
            <p>
            "Para o segmento varejista, conquistar mercado e resultados positivos requer competição, redução de custos, aumento da rentabilidade e manutenção de operações 100% ativas."
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

export default HeadbandGoverno


