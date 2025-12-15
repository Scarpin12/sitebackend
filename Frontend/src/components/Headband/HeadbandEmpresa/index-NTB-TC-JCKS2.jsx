import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandEmpresa = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>Conheça a TC do Brasil</h1>
          <div className="box-p">
            <p>
              "Desenvolvemos soluções personalizadas que incorporam inovação e as mais recentes tendências em serviços de TI. Isso se traduz em economia de custos e resultados aprimorados para nossos clientes."
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

export default HeadbandEmpresa


