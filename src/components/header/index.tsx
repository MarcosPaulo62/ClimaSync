import Menu from "../menu";
import './index.css';
import logo from '../../assets/climaSync-logo.png';

export default function Header(){
    return(
        <>
            <header>
                <img className="logo" src={logo} alt="Logo da ClimaSync, com símbolos do sol, de uma nuvem chovendo e de um termômetro" />

                <Menu />
            </header>
        </>
    )
}
