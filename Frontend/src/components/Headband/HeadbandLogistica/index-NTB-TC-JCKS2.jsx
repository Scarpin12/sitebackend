import React, { useEffect } from "react"
import './headband.css';

import { Link } from "react-router-dom"

const HeadbandLogistica = () => {


  useEffect(() => {
  }, [])

  return (

    <>


      <div id="headband">
        <div className="container">
          <h1>Soluções para logistica</h1>
          <div className="box-p">
            <p>
            "Soluções de TI para logística envolvem o uso de tecnologia para otimizar operações logísticas, incluindo rastreamento de estoque, planejamento de rotas e monitoramento de entregas."
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

export default HeadbandLogistica


