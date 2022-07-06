import { useState } from "react"

const CardFilms = ({ title, sinopse, atores}) => {

    const [verElenco, setVerElenco] = useState(false)
    const [verSinopse, setVerSinopse] = useState(true)

    return(
        <div className="card">
            <h1>{title}</h1>
            <h3>{sinopse}</h3>
            <button>Ver elenco</button>            
        </div>
    )
}

export default CardFilms