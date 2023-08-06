import { Link } from 'react-router-dom';
import './index.css';

interface LinkMenuProps{
    children: React.ReactNode;
    to: string;
}

export default function LinkMenu({ children, to }: LinkMenuProps): JSX.Element {
    return(
        <>
            <Link className='link-menu' to={to}>
                {children}
            </Link>
        </>
    )
}