import { useState } from "react"

const CardFilms = ({ title, sinopse, atores}) => {
    
    const [btnVerElenco, setBtnVerElenco] = useState(false)

    function changeButton() {
        if(btnVerElenco === false ) {
            setBtnVerElenco(true)
        }
        else{
            setBtnVerElenco(false)
        }
    }

    return(
        <div className="card">
            <h1>{title}</h1>
            {btnVerElenco === false && 
                <h3>{sinopse}</h3>
            }
            {btnVerElenco &&
            <ul>
                {atores.map(() => (
                    <li>{atores}</li>
                ))}
            </ul>
            }
            
            <button onClick={ changeButton }>{btnVerElenco ? 'Ver sinopse' : 'Ver elenco'}</button>            
        </div>
    )
}

export default CardFilms