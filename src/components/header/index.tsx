import Menu from "../menu";
import './index.css';
import logo from '../../assets/climaSync-logo.png';
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
            <header>
                <Link to='/'>
                    <img className="logo" src={logo} alt="Logo da ClimaSync, com símbolos do sol, de uma nuvem chovendo e de um termômetro" />
                </Link>
                
                <Menu />
            </header>
        </>
    )
}
