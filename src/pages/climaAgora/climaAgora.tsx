import CardClima from '../../components/cardClima';
import './climaAgora.css';
import PesquisaCidade from '../../components/pesquisaCidade';
import { useState } from 'react';

export default function ClimaAgora(){

    const [cidade, setCidade] = useState<string>("");

    const atualizarCidade = (cidade: string): void => {
        setCidade(cidade);
    }

    return(
        <main className='climaAgora'>
            <section className='principal'>
                <PesquisaCidade titulo='Veja o clima agora na sua cidade'/>
            </section>

            <section className='card'>
                <CardClima cidade='Porto Alegre' />
            </section>
        </main>
    )
}