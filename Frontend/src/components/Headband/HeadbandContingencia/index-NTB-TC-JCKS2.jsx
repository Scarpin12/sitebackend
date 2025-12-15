import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandContingecnia = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>Contingência</h1>
          <div className="box-p">
            <p>
            "Um Plano de Contingência de TI é a rede de segurança digital que protege sua empresa contra desastres cibernéticos. Garanta a continuidade dos negócios e minimize impactos. Consulte-nos!"
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

export default HeadbandContingecnia


