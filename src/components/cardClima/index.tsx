import './index.css';
import { useState, useEffect } from 'react';
import sol from '../../assets/sun-dim-fill.svg';
import nuvem from '../../assets/cloud-fill.svg';
import dia from '../../assets/sun-fill.svg';
import noite from '../../assets/moon-fill.svg';
import vento from '../../assets/wind-fill.svg';
import umidade from '../../assets/drop-fill.svg';
import Button from '../button';

interface Clima{
    temp: number,
    condition_code: string,
    description: string,
    currently: string,
    city: string,
    humidity: number,
    wind_speedy: string
}

let response = {
    temp: 19,
    condition_code: "28",
    description: "Tempo nublado",
    currently: "noite",
    city: "Cruz das Almas, BA",
    humidity: 93,
    wind_speedy: "1.63 km/h"
}

export default function CardClima(){

    const [clima, setClima] = useState<Clima> (response);

    useEffect(() => {
        fetchClima();
    }, []);

    const fetchClima = async () => {
        try{
            const response = await fetch('https://api.hgbrasil.com/weather?key=6a46c28e&city_name=Campinas,SP');
            const data = await response.json();

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


    let diaOrNight = null;

    if (clima.currently == 'dia'){
        diaOrNight = <img src={dia} alt={"símbolo " + clima.currently} />;
    } else {
        diaOrNight = <img src={noite} alt={"símbolo " + clima.currently} />
    }

    return(
        <>
            <div className='card-clima'>
                <h3>Tempo agora em <br />{clima.city}</h3>

                <div className='temperatura'>
                    <img src={sol} alt={"símbolo que representa " + clima.description} />
                    <p>{clima.temp}°</p>
                </div>

                <div className='condicao-atual'>
                    <p>
                        <img src={nuvem} alt="símbolo nuvem" /> <span>{clima.description}</span>
                    </p>
                    <p>
                        {diaOrNight} <span>{capitalizarTexto(clima.currently)}</span>
                    </p>
                </div>

                <hr />
                <div className='vento'>
                    <p>
                        <img src={vento} alt="símbolo do vento" /> <span>VENTO</span>
                    </p>
                    <p className='valor'>
                        {clima.wind_speedy}
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