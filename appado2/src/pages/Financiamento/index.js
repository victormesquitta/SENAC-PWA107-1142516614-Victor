/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 *                              SENAC - TADS - Programacao Web                                      *
 *                           ADO #02 Trabalhando As Rotas e LINKS                                   *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*
 *                               Nome : << Vitor Ripper Araujo> >                                   *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { Link } from "react-router-dom";
import {useState} from 'react';
import './financiamento.css';




function Financiamento(){
    const [dadosFinancimento, setdadosFinanciamento]= useState({
        jurosCliente: 0 +'%',
        valorCliente: 0
        
    });
    const[valor, setValor] = useState()
    const [juros, setJuros] = useState(0)
    

    function calcular(evento){
        evento.preventDefault();
        
        
        if(valor < 800){
            setJuros(8)
        }
        

        
        
        setdadosFinanciamento({
            valorCliente : valor,
            jurosCliente:  juros +'%'
            

            
        })
        
    
        
    }


    return(
    <div className="financiamento">
        <form onSubmit = {calcular}>
            <div className="dadosfinan">

                <h1 className="titulo1">Simulação de Financiamento</h1>
                <br></br>

                <div className="cadastrof">
                    <span>Nome do cliente: Vitor Ripper Araujo  </span>
                    <br></br>
                </div>

                <div>
                    <label>Valor Solicitado: </label>
                    <input 
                        className="valor" 
                        type='number'
                        onChange={(evento) => setValor(evento.target.value)} 
                        placeholder="Informe o valor do financiamento">

                    </input>

                    <button className='botaof' type="submit">Calcular</button>
                </div>
            
            </div>
        <div className="calculo">
                <h1 className="titulo2">Calculo do Financiamento</h1>
                <br></br>

                <span>Valor Solicitado: {dadosFinancimento.valorCliente}</span>
                <br></br>
                
                <span>Taxa de Juros: {dadosFinancimento.jurosCliente} </span>
                <br></br>

                <div className="parcela">
                    <span>2ª Parcela:R$1.200,00 <br/> 3ª Parcela:R$1.200,00 <br/> 4ª Parcela:R$1.200,00</span>
                </div>

                <div className="total">
                    <span>Total a pagar:R$1.200,00 <br/> Total a pagar:R$1.200,00 <br/> Total a pagar:R$1.200,00</span>
                </div>
                

        </div>
        </form>
                    
        

        </div>
    )
}

export default Financiamento;

