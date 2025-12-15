import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandAuditoria = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>Auditoria</h1>
          <div className="box-p">
            <p>
            "A auditoria em TI é uma prática essencial para garantir a conformidade, segurança e eficiência dos sistemas e processos de uma organização. Ela envolve a avaliação minuciosa dos ativos de TI, infraestrutura, políticas, procedimentos e controles de segurança"
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

export default HeadbandAuditoria


