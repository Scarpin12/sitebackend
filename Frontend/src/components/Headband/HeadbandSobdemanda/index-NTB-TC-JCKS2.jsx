import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandSobDemanda = () => {


  useEffect(() => {
  }, [])

  return (

    <>


      <div id="headband">
        <div className="container">
          <h1>Provisionamento de servidores sob demanda</h1>
          <div className="box-p">
            <p>
            "O provisionamento sob demanda de servidores e armazenamento em rede representa uma abordagem extremamente valiosa para empresas que buscam flexibilidade e escalabilidade em suas operações de TI."
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

export default HeadbandSobDemanda


