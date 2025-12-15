import React from 'react';
import './formulario.css';


const Formulario = () => {
    return (
        <>
            <div className="form_contato mt-4 mb-4" >

                <center><h3>Entre em contato conosco</h3></center>


                <form action="https://formspree.io/f/xbjndbaw" method="POST"  >
                    <div className="form1" >
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" name='name' placeholder=" Nome" />
                                <input type="email" name='email' placeholder=" Email" />
                                <input type="text" name="assunto" placeholder=" Assunto" />
                            </div>
                            <div className="col-md-6">

                                <input type="text" name='sobrenome' placeholder=" Sobrenome" />
                                <input type="tel" name='tel' placeholder=" Telefone" />
                                <input type="text" name="empresa" placeholder=" Empresa" />
                            </div>
                        </div>
                       

                    </div>

                    <div className="form2 ">
                        <textarea cols="30" rows="10" name='menssage' placeholder=" Deixe aqui sua mensagem" />
                    </div>
                    <div className='divi'>
                        <input type="hidden" name="_next"  target="_blank" value="https://www.tcdobrasil.com.br" />
                        <button type="submit" value="Enviar"  >Enviar</button>


                    </div>
                </form>


            </div>

        </>
    )

}
export default Formulario