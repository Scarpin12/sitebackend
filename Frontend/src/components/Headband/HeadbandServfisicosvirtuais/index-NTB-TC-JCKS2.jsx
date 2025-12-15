import React, { useEffect } from "react"
import './headband.css';
import { Link } from "react-router-dom"
 

const HeadbandServfisicosvirtuais = () => {


  useEffect(() => {
  }, [])

  return (

    <>


      <div id="headband">
        <div className="container">
          <h1>Hospedagem de servidores fisicos e virtuais</h1>
          <div className="box-p">
            <p>
            "A hospedagem de servidores físicos e virtuais é um serviço essencial para empresas que desejam manter suas operações de TI eficientes e confiáveis. A TC do Brasil oferece uma solução flexível que atende às diversas necessidades de infraestrutura."
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

export default HeadbandServfisicosvirtuais


