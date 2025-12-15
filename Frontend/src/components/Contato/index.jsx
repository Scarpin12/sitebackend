import React from "react";
import './btncontato.css';
import { Link } from "react-router-dom"



const BtnContato = () => {
  

  return (
    <>
    <div className="btncontato">
    <button><Link to="https://api.whatsapp.com/send/?phone=5511913155845&text&app_absent=0" target="_blank"> ENTRE JÁ EM CONTATO!</Link></button>

    </div>
    
      
    </>
  );
}

export default BtnContato;
