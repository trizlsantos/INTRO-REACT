import Paragrafo from "../components/Paragrafo";
import Titulo from "../components/Titulo";
import Container from "../components/Container";
import Informacao1 from "../components/Informacao1";
import equilibrium from "../assets/equilibrium.jpg";
import Descricao from "../components/Descricao";
import avatar from "../assets/avatar.png";
import Dias from "../components/Dias";
import Infos from "../components/Infos";
import Perfil from "../components/Perfil";
import clock from "../assets/clock.svg";
import ethereum from "../assets/ethereum.svg";
import view from "../assets/view.svg";
import Sessao1 from "../components/Sessao1";
import Sessao2 from "../components/Sessao2";

const App = () => {
    return (
        <Container>
            
            <div className="image-container">
            <img className = "image" src = {equilibrium} alt = ""/>
      <div className="overlay">
        <img src={view} alt="View Icon" className="view-icon" />
      </div>
    </div>
            <Titulo />
            <Paragrafo />
            <Infos>
                <Sessao1>
                    <img className=" icon-1" src = {ethereum} alt = ""/>
                    <Informacao1 />
                </Sessao1>
                <Sessao2>
                    <img className=" icon-2" src = {clock} alt = ""/>
                    <Dias />
                </Sessao2>
            </Infos>
           <Perfil>
                <img  className = "avatar" src = {avatar} alt = ""/>
                <Descricao />
            </Perfil>
           


                
        </Container>
        
    );
}

export default App;