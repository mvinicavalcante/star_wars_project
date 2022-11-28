import './styles.css'

import Darth from "../../assets/darth-vader.png"

const Home = () => {
    return(
        <div className="main">
            <h1>🌌 Bem-vindo 🌌</h1>
            <h2>Projeto desenvolvido por Marcos Vinícius</h2>
            <p>O intuito do projeto é demonstrar habilidades no Front-End.
                Tais habilidades seriam expostas com integração de uma API no site,
                estilização e lógica aplicada no desenvolvimento. <br /><br />
                Espero que goste e aproveite para consumir conteúdo do mais querido, o Star Wars!
            </p>
            <br />
            <img 
                src={Darth}
                width= '350px'
            />
        </div>
    )
}

export default Home