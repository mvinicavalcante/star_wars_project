import './styles.css'
import { useState, useEffect } from "react"
import api from "../../services/api"

import CardFilms from "../../components/CardFilms"

const Filmes = ({ children }) => {

    const [listaFilmes, setListaFilmes] = useState([])

    useEffect(() => {
        api.get('films').then(({data}) => {
            setListaFilmes(data.results)
        })
        console.log(listaFilmes)
    }, [''])

    return(
        <div className="lista-filmes">
            <div className={children}>
                {listaFilmes?.map((data, index) => (
                    <CardFilms key={index} title={data.title} sinopse= {data.opening_crawl} atores= {data.characters} />
                ))}
            </div>
        </div>
        
    )
}

export default Filmes
