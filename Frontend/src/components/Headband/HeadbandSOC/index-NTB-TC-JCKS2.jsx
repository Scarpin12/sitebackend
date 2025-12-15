import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom" 


const HeadbandSOC = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>SOC - Security Operations Center</h1>
          <div className="box-p">
            <p>
            "A TC do Brasil é sua parceira confiável em segurança digital. Com nosso dedicado Security Operations Center (SOC), oferecemos soluções completas de proteção para seus ativos digitais, independentemente de sua localização - seja em ambientes físicos ou na nuvem."
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

export default HeadbandSOC


