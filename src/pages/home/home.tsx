import { TextField } from '@mui/material';
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
                            <Button href='/seteDias' color='var(--secondary-color)'>7 DIAS</Button>
                        </div>    
                    </div>                                    
                </div>

                <CardClima cidade='São Paulo' />
            </section>

            <section className='oQueSomos'>
                <h2>O que é ClimaSync</h2>
                <p>ClimaSync é uma plataforma online especializada em fornecer informações meteorológicas precisas e atualizadas para ajudar as pessoas a se prepararem para as condições climáticas em suas regiões. Com tecnologia avançada e uma equipe de meteorologistas experientes, o ClimaSync oferece previsões detalhadas para dias, semanas e até meses à frente. Além disso, o site fornece alertas em tempo real sobre eventos climáticos importantes e recursos adicionais, como gráficos e análises do clima. Seja para planejar uma viagem, se proteger de tempestades ou simplesmente se vestir adequadamente, o ClimaSync é o parceiro confiável para sincronizar você com o clima.</p>
            </section>

            <section className='newsletter'>
                <h2>Assine a nossa Newsletter</h2>
                <p>🌤️ Assine a Newsletter ClimaSync! Fique por dentro das previsões meteorológicas mais precisas e atualizadas para planejar seu dia com confiança. Receba alertas em tempo real e dicas especiais para enfrentar qualquer clima. Junte-se a nós e sincronize-se com o clima! 🌦️</p>
                <form>
                    <TextField className='email' id="outlined-basic" label="Seu email" variant="outlined" />
                    <TextField className='cidade' id="outlined-basic" label="Sua cidade" variant="outlined" />
                    <Button href='/' color='var(--primary-color)'>ASSINAR</Button>
                </form>
            </section>
        </main>
    )
}
