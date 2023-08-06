import Button from '../../components/button';
import CardClima from '../../components/cardClima';
import './home.css';

export default function Home(){
    return(
        <main className='home'>
            <section className='principal'>
                <div className='sobre'>
                    <div>
                        <h1>ClimaSync</h1>
                        <p><span>Sua previsão do tempo confiável e atualizada.</span> Planeje seu dia com segurança e precisão, seja sol ou chuva, estamos aqui para mantê-lo informado. Acesse agora e sincronize-se com o clima!</p>
                        <div className='buttons'>
                            <Button href='/climaAgora' color='var(--primary-color)'>CLIMA AGORA</Button>
                            <Button href='seteDias' color='var(--secondary-color)'>7 DIAS</Button>
                        </div>    
                    </div>                                    
                </div>
                <CardClima />
            </section>
        </main>
    )
}