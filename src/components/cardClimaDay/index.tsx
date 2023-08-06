import './index.css';
import termometro from '../../assets/thermometer-light.svg';
import { ArrowUp, ArrowDown } from '@phosphor-icons/react';

interface CardClimaDayProps{
    dia: string,
    data: string,
    max: number,
    min: number
}

export default function CardClimaDay({dia, data, max, min}: CardClimaDayProps){

    return(
        <>
            <div className='card-clima-day'>
                <h2>{dia} <br /> {data}</h2>
                <hr />
                <div className='tempMinMax'>
                    <p className='temp'>
                        <img src={termometro} alt="símbolo termometro" /> <span>TEMPERATURA</span>
                    </p>

                    <div className='minMax'>
                        <p><ArrowDown className='min' size={32} weight="light" /> <span>{min}°</span></p>
                        <p><ArrowUp className='max' size={32} weight="light" /> <span>{max}°</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
