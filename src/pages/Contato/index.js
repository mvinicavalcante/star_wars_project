import { FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contato = () => {
    return(
        <ul>
            <h1>Clique em um dos links e entre em contato comigo!</h1>

            <a href='https://contate.me/marcos-vinicius-cavalcante' target="_blank">
                <li><FaWhatsapp size={25} text-anchor="middle"/> WhatsApp</li>
            </a><br />
            <a href='https://www.instagram.com/m.v_cavalcante/' target="_blank">
                <li><FaInstagram size={25} text-anchor="middle"/> Instagram</li>
            </a>
            <br />
            <a href='https://twitter.com/mvziin' target="_blank">
                <li><FaTwitter size={25} text-anchor="middle"/> Twitter</li>
            </a><br />
            <a href='https://www.linkedin.com/in/marcos-vinícius-cavalcante-oliveira-96527b15a/' target="_blank">
                <li><FaLinkedin size={25} text-anchor="middle" /> Linkedin</li>
            </a>
            <br />
        </ul>
    )
}

export default Contato