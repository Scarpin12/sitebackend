import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandBackup = () => {


  useEffect(() => {
  }, [])

  return (

    <>


      <div id="headband">
        <div className="container">
          <h1>Backup Off-site</h1>
          <div className="box-p">
            <p>
            "A estratégia de backup off-site é uma parte essencial da gestão de dados corporativos, visando a garantir a segurança e disponibilidade das informações em cenários de falhas ou desastres imprevistos."
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

export default HeadbandBackup


