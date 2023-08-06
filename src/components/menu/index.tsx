import LinkMenu from "../linkMenu";
import './index.css';

export default function Menu(){
    return(
        <>
            <nav>
                <LinkMenu to='/'>HOME</LinkMenu>
                <LinkMenu to='/climaAgora'>CLIMA AGORA</LinkMenu>
                <LinkMenu to='/seteDias'>SETE DIAS</LinkMenu>
                <LinkMenu to='/contato'>CONTATO</LinkMenu>
            </nav>
        </>
    )
}