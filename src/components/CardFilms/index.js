import './style.css'

import api from '../../services/api'
import axios from 'axios'
import { useState, useEffect } from "react"

const CardFilms = ({ title, sinopse, person }) => {
    
    const [btnVerElenco, setBtnVerElenco] = useState(false)
    const [personagens, setPersonagens] = useState([])

    const api2 = axios.create({
        baseURL: "",
      });

    useEffect(() => {
        var aux = []
        Promise.all(
            person.map(async (id) => {
                await api2.get(id).then((data) => {
                    setPersonagens(aux)
                    aux = personagens
                    aux.push(data.data.name)
                    console.log(aux)
                })                
            })
        )
        
    }, [0]);

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

            {btnVerElenco ?
                <ul>
                    {personagens.map((data, index) => {
                        return(
                            <li className='lista-personagens' key={index}>{data}</li>
                        )
                    })}
                </ul>
                :
                <h3>{sinopse}</h3>
            }
            
            <button className='btn-filme' onClick={ changeButton }>
                {btnVerElenco ? 'Ver sinopse' : 'Ver elenco'}
            </button>            
        </div>
    )
}

export default CardFilms