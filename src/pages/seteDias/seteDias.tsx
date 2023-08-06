import CardClimaDay from '../../components/cardClimaDay';
import PesquisaCidade from '../../components/pesquisaCidade';
import './seteDias.css';

const dias = [
    {dia: 'Segunda', data: '07/08', max: 32, min: 25},
    {dia: 'Terça', data: '08/08', max: 28, min: 21},
    {dia: 'Quarta', data: '09/08', max: 30, min: 22},
    {dia: 'Quinta', data: '10/08', max: 27, min: 18},
    {dia: 'Sexta', data: '11/08', max: 25, min: 15},
    {dia: 'Sábado', data: '12/08', max: 33, min: 24},
    {dia: 'Domingo', data: '13/08', max: 35, min: 25},
    {dia: 'Segunda', data: '14/08', max: 26, min: 12}
]

export default function SeteDias(){
    return(
        <main className='seteDias'>
            <section>
                <PesquisaCidade titulo='Previsão para a sua cidade nos próximos 7 dias' />
            </section>
           
            <section className='cards'>
                {dias.map((dia) => (
                    <CardClimaDay dia={dia.dia} data={dia.data} min={dia.min} max={dia.max}/>
                ))}
            </section>

        </main>
    )
}