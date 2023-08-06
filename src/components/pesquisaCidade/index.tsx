import { TextField } from '@mui/material';
import Button from '../button';
import './index.css';

interface PesquisaCidadeProps{
    titulo: string;
}

export default function PesquisaCidade({ titulo }: PesquisaCidadeProps){
    return(
        <section className='newsletter pesquisaCidade'>
            <h2>{titulo}</h2>
            <form>
                <TextField className='cidade' id="outlined-basic" label="Sua cidade" variant="outlined" />
                <Button href='' color='var(--primary-color)'>ATUALIZAR</Button>
            </form>
        </section>
    )
}
