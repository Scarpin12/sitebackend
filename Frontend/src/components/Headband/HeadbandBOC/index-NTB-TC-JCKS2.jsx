import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"

const HeadbandBOC = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>BOC - Backup Operations Center</h1>
          <div className="box-p">
            <p>
            "Temos soluções completas de backups, recuperações e segurança de dados. Visando oferecer proteção abrangente para todas as cargas de trabalho, independentemente de estarem localizadas em ambientes físicos ou em nuvem."
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

export default HeadbandBOC


