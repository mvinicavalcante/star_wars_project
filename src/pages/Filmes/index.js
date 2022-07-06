import { useState, useEffect } from "react"
import api from "../../services/api"

import CardFilms from "../../components/CardFilms"

const Filmes = () => {

    const [listaFilmes, setListaFilmes] = useState([])

    useEffect(() => {
        api.get('films').then(({data}) => {
            setListaFilmes(data.results)
        })
        console.log(listaFilmes)
    }, [''])

    return(
        <>
            {listaFilmes?.map((data, index) => (
                <CardFilms key={index} title={data.title} sinopse= {data.opening_crawl} atores= {data.characters} />
            ))}
        </>
        
    )
}

export default Filmes
