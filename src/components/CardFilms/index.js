import { useState } from "react"

const CardFilms = ({ title, sinopse, atores}) => {

    const [verElenco, setVerElenco] = useState(true)

    return(
        <div>
            <h1>{title}</h1>
            <h3>{sinopse}</h3>
            {verElenco &&
                <button onClick={(e) => setVerElenco(!e)}>Ver elenco</button>
            }
        </div>
    )
}

export default CardFilms