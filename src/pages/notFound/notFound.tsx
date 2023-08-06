import './notFound.css';
import logo from '../../assets/notFound.png';

export default function NotFound(){
    return(
        <main className='not-found'>
            <img src={logo} alt="imagem de página não encontrada" />
        </main>
    )
}