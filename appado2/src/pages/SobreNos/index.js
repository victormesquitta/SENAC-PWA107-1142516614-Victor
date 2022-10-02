/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 *                              SENAC - TADS - Programacao Web                                      *
 *                           ADO #02 Trabalhando As Rotas e LINKS                                   *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*
 *                               Nome : << Vitor Ripper Araujo> >                                   *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
import { Link } from "react-router-dom";
import "./sobrenos.css"
import imagem from "./imagem-sobrenos.jpg"

function SobreNos(){



    return(
        <div id="todo">
            
            <div id="sobrenos">
                <h1 id="titulo">Sobre Nós</h1>
                <p id="lorem1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum sit amet magna vel egestas. Sed ornare sem vel ipsum pretium eleifend. Integer orci massa, tincidunt id hendrerit id, vulputate vel velit. </p>
                <p id="lorem2">Ut tempor aliquet sapien, et suscipit odio molestie sit amet. Integer sed luctus orci. Nulla nisl elit, finibus ac ante et, auctor dapibus orci. Suspendisse at arcu lorem. Integer ornare, eros eget mollis dapibus, sapien est dapibus mi, auctor semper lacus urna pellentesque eros. Suspendisse condimentum eros sit amet dolor malesuada faucibus. Duis vehicula finibus urna, vitae blandit tellus. Nunc aliquet justo in aliquam rhoncus. Pellentesque hendrerit nunc purus, blandit tincidunt lacus semper eu. Phasellus vitae nunc porta, pretium nulla in, placerat diam.</p>
            </div>
        

            <div>
                <img id="imagem" src={imagem} alt="foto-sobrenos"/>
            </div>
            
        </div>
    )
}

export default SobreNos;