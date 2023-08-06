import './index.css';
import { useState, useEffect } from 'react';
import sol from '../../assets/sun-dim-fill.svg';
import nuvem from '../../assets/cloud-fill.svg';
import dia from '../../assets/sun-fill.svg';
import noite from '../../assets/moon-fill.svg';
import vento from '../../assets/wind-fill.svg';
import umidade from '../../assets/drop-fill.svg';
import termometro from '../../assets/ThermometerSimple.svg';
import Button from '../button';

interface Clima{
    temp: number,
    description: string,
    city: string,
    humidity: number,
    wind_speedy: number
}

let objetoDefault: Clima = {
    temp: 0,
    description: "",
    city: "",
    humidity: 0,
    wind_speedy: 0
}

interface Cidade{
    cidade: string;
}

export default function CardClima({ cidade }: Cidade){
    const nomeCidade = (cidade.trim()).replace(" ", "+");

    const apiKey = 'e2c83d17e1e783d969e8dd525e2204ae';
    const apWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&units=metric&appid=${apiKey}&lang=pt_br`;

    const [clima, setClima] = useState<Clima> (objetoDefault);

    useEffect(() => {
        fetchClima();
    }, []);

    const fetchClima = async () => {
        try{
            const response = await fetch(apWeatherUrl);
            const data = await response.json();

            let retorno: Clima = {
                temp: data.main.temp,
                description: data.weather[0].description,
                city: data.name,
                humidity: data.main.humidity,
                wind_speedy: data.wind.speed
            }

            setClima(retorno);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <div className='card-clima'>
                <h3>Tempo agora em <br />{clima.city}</h3>

                <div className='temperatura'>
                    <img src={termometro} alt="símbolo termômetro" />
                    <p>{Math.round(clima.temp)}°</p>
                </div>

                <div className='condicao-atual'>
                    <p>
                        <img src={nuvem} alt="símbolo nuvem" /> <span>{capitalizarTexto(clima.description)}</span>
                    </p>
                </div>

                <hr />
                <div className='vento'>
                    <p>
                        <img src={vento} alt="símbolo do vento" /> <span>VENTO</span>
                    </p>
                    <p className='valor'>
                        {Math.round(clima.wind_speedy)} km/h
                    </p>
                </div>

                <hr />
                <div className='umidade'>
                    <p>
                        <img src={umidade} alt="símbolo de uma gota" /> <span>UMIDADE</span>
                    </p>
                    <p className='valor'>
                        {clima.humidity}%
                    </p>
                </div>
                
                <hr />
                <Button href='/seteDias' color='var(--primary-color)'>7 DIAS</Button>
            </div>
        </>
    )
}

function capitalizarTexto(texto: string){
    const capitalize: string = texto.charAt(0).toUpperCase() + texto.slice(1);
    return capitalize;
}