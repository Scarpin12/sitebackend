import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandServGerenciados = () => {


  useEffect(() => {
  }, [])

  return (

    <>


      <div id="headband">
        <div className="container">
          <h1>Serviços Gerenciados</h1>
          <div className="box-p">
            <p>
              "
              Os serviços gerenciados da TC do Brasil são um suporte fundamental para suas operações de TI. Com monitoramento e supervisão contínuos, garantimos que os processos funcionem sem interrupções."
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

export default HeadbandServGerenciados


