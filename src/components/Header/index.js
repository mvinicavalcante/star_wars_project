import './styles.css'

import Logo from '../../assets/star-wars-logo.png'

import { useState } from 'react'

const Header = () => {

    const [navHome, setNavHome] = useState(true)
    const [navFilmes, setNavFilmes] = useState(false)
    const [navContato, setNavContato] = useState(false)
    const [isToggleMenuMobile, setIsToggleMenuMobile] = useState(false)

    function toggleMenuMobile(){
        setIsToggleMenuMobile(e => !e)
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

                {isToggleMenuMobile &&
                    <div className='menuMobile'>
                        <p>a</p>
                    </div>
                }
            </header>
        </div>
    )
}

export default Header