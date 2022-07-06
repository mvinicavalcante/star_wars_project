import { useState, useEffect } from "react"
import api from "../../services/api"

import CardFilms from "../../components/CardFilms"

const Filmes = () => {

    const [listaFilmes, setListaFilmes] = useState()

    useEffect(() => {
        api.get('films').then(({data}) => {
            setListaFilmes(data.results)
        })
        console.log(listaFilmes)
    }, [1])

    return(
        <CardFilms title="{data.title}" sinopse="{data.title} "atores="{data.title} "/>
    )
}

export default Filmes
