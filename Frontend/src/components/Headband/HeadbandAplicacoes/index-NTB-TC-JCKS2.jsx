import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandAplicacoes = () => {


  useEffect(() => {
  }, [])

  return (

    <>


      <div id="headband">
        <div className="container">
          <h1>Hospedagem de aplicações</h1>
          <div className="box-p">
            <p>
            "Otimize o desempenho e a disponibilidade de suas aplicações com nossos serviços de hospedagem especializados. Conte com nossa expertise para garantir que suas aplicações estejam sempre no ar e funcionando com eficiência."
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

export default HeadbandAplicacoes


