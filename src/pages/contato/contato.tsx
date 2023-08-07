import { TextField } from '@mui/material';
import './contato.css';
import Button from '../../components/button';

export default function Contato(){
    return(
        <>
            <main className='contato-main'>
                <div className='contato'>
                    <h2>Entre em contato</h2>
                    <form action="">
                        <TextField className='input' id="outlined-basic" label="Seu nome" variant="outlined" />
                        <TextField className='input' id="outlined-basic" label="Seu email" variant="outlined" />
                        <TextField className='input' id="outlined-basic" label="Assunto" variant="outlined" />
                        <TextField multiline={true} rows={4} className='input' id="outlined-basic" label="Mensagem" variant="outlined" />
                        <Button href='' color='var(--primary-color)'>ENVIAR</Button>
                    </form>
                </div>
            </main>
        </>
    )
}