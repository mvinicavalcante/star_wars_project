import api from '../../services/api'
import { useState, useEffect } from "react"

const CardFilms = ({ title, sinopse, atores }) => {
    
    const [btnVerElenco, setBtnVerElenco] = useState(false)
    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        api.get('people').then(({data}) => {
            setPersonagens(data.results)
        });

        console.log(personagens)

    }, ['']);

    //Passar o id do characters do filme, puxar o id dele aqui pra colocar na URL do 'people' e pegar o nome
    
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
                personagens.map((data) => {
                    <ul>
                        <li>{data.name}</li>
                    </ul>
                })
            }
            
            <button onClick={ changeButton }>
                {btnVerElenco ? 'Ver sinopse' : 'Ver elenco'}
            </button>            
        </div>
    )
}

export default CardFilms