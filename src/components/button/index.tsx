import { Link } from 'react-router-dom';
import './index.css';

interface ButtonProps{
    children: React.ReactNode,
    color: string,
    href: string
}

export default function Button({ color, href, children }: ButtonProps){
    return(
        <button style={{backgroundColor: color}}>
            <Link to={href}>{children}</Link>
        </button>
    )
}
