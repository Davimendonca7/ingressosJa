import React, { useEffect, useState } from 'react';
import './SessoesFilme.css';
import axios from 'axios';

const SessoesFilme = ({ idFilme, idCinema }) => {
    const [modalHoraOpen, setModalHoraOpen] = useState(false);
    const [modalTipoOpen, setModalTipoOpen] = useState(false);

    const [dataHora, setDataHora] = useState('');
    const tipo = ['Todos', '3D', '2D'];
    const [horas, setHoras] = useState([]);
    const [dataTipo, setDataTipo] = useState(tipo[0]);
    
    useEffect(() => {
        axios.get(`http://localhost:8080/sessoes/cinema/${idCinema}/filme/${idFilme}`)
        .then(response => {
            const fetchedHoras = response.data;
            setHoras(fetchedHoras);
            if (dataHora === '' && fetchedHoras.length > 0) {
                setDataHora(fetchedHoras[0]);
            }
        })
        .catch(error => {
            console.error('Erro ao enviar requisição:', error);
        });
    }, []); 
    
    useEffect(() => {
        // console.log(dataHora[0]);
        const filtro = {
            data : "2024-07-01",
            tipoSessao : "Todos",
            idCinema : 1,
            idFilme : 2
          }
        console.log(filtro);
        axios.post(`http://localhost:8080/sessoes/filtro`, filtro)
        .then(response => {
            console.log('response filtro', response.data);
            
        })
        .catch(error => {
            console.error('Erro ao enviar requisição:', error);
        });
    }, [dataHora, dataTipo]); 

    return (
        <div className='sessao'>
            <div className="escolherHora">
                <button className='btnHoraSessao' onClick={() => setModalHoraOpen(!modalHoraOpen)}>
                    {dataHora} {modalHoraOpen ? (<i className='bx bx-chevron-right'></i>) : (<i className='bx bx-chevron-down'></i>)}
                </button>
                {modalHoraOpen && (
                    <div className="horarios">
                        {horas.map((h) => (
                            <button key={h} value={h} onClick={(e) => {
                                setDataHora(e.target.value);
                                setModalHoraOpen(false);
                            }}>
                                {h}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="escolherTipo">
                <button className='btnTipoSessao' onClick={() => setModalTipoOpen(!modalTipoOpen)}>
                    {dataTipo} {modalTipoOpen ? (<i className='bx bx-chevron-right'></i>) : (<i className='bx bx-chevron-down'></i>)}
                </button>
                {modalTipoOpen && (
                    <div className="tipos">
                        {tipo.map((t) => (
                            <button key={t} value={t} onClick={(e) => {
                                setDataTipo(e.target.value);
                                setModalTipoOpen(false);
                            }}>
                                {t}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SessoesFilme;
