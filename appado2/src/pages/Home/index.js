/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 *                              SENAC - TADS - Programacao Web                                      *
 *                           ADO #02 Trabalhando As Rotas e LINKS                                   *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*
 *                               Nome : << Vitor Ripper Araujo> >                                   *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { Link } from "react-router-dom";
import './banco.css';
import cartao from'./cartaodecredito.jpg';

function Home(){



    return(
        <div className="homep">
            
        <img className="imagemfundo" src= {cartao}/>
        
        <div className="texto">
            <h1 id="txt2">Home</h1>
            <br></br>
            <span id="textinho">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </span>
            <br/>
            <input type="button" id="botao" value="Abra sua conta"/>
        </div> 
                
    

        </div>
    )
}

export default Home;