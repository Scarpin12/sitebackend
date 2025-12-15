import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"


const HeadbandLicenciamento = () => {


  useEffect(() => {
  }, [])

  return (

    <>

   
      <div id="headband">
        <div className="container">
          <h1>Licenciamento de software</h1>
          <div className="box-p">
            <p>
            "O uso de softwares licenciados é essencial para manter a legalidade, a segurança e a eficiência das operações de TI em organizações"
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

export default HeadbandLicenciamento


