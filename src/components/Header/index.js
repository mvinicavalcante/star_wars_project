import './styles.css'

import Logo from '../../assets/star-wars-logo.png'

import { useState } from 'react'

const Header = () => {

    const [navHome, setNavHome] = useState(true)
    const [navFilmes, setNavFilmes] = useState(false)
    const [navContato, setNavContato] = useState(false)
    const [isToggleMenuMobile, setIsToggleMenuMobile] = useState(false)

    function toggleMenuMobile() {
        setIsToggleMenuMobile(e => !e)
    }

    function navEffects(e) {
        setNavHome(!e)
        setNavFilmes(!e)
        setNavContato(!e)
    }

    return(
        <div className='header'>
            <header>
                <img 
                    src={Logo}
                    width= '110px'
                />

                <nav id='desktop'>
                    <a href='/'>Home</a>
                    <a href='/films'>Filmes</a>
                    <a href='/contact'>Contato</a>
                </nav>

                <nav id='mobile' onClick={toggleMenuMobile}>
                    <div className='menuMobileIcon'/>
                    <div className='menuMobileIcon'/>
                    <div className='menuMobileIcon'/>
                </nav>

                
            </header>
            {isToggleMenuMobile &&
                    <div className='menuMobile'>
                        <h1 onClick={toggleMenuMobile}>Voltar</h1>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/films'>Films</a></li>
                            <li><a href='/contact'>Contato</a></li>
                        </ul>
                    </div>
                }
        </div>
    )
}

export default Header