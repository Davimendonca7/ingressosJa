import React, { useEffect, useState } from 'react';
import './SessoesFilme.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const SessoesFilme = ({ idFilme, idCinema }) => {
    const [modalHoraOpen, setModalHoraOpen] = useState(false);
    const [modalTipoOpen, setModalTipoOpen] = useState(false);

    const [dataHora, setDataHora] = useState('');
    const tipo = ['Todos', '3D', '2D'];
    const [horas, setHoras] = useState([]);
    const [dataTipo, setDataTipo] = useState(tipo[0]);
    const [sessoes, setSessoes] = useState([])
    
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
    }, [dataHora, idCinema, idFilme]); 
    
    useEffect(() => {
        console.log('t', dataTipo);
        const filtro = {
            data: dataHora[0],
            tipoSessao: dataTipo,
            idCinema: idCinema,
            idFilme: idFilme
          }
        console.log(filtro);
        axios.post(`http://localhost:8080/sessoes/filtro`, filtro)
        .then(response => {
            console.log('response filtro', response.data);
            setSessoes(response.data)
        })
        .catch(error => {
            console.error('Erro ao enviar requisição:', error);
        });
    }, [dataHora, dataTipo, idCinema, idFilme]); 

    return (
        <div className='sessao'>
            <h1 style={{textAlign: 'center', fontSize: '28px'}}>Escolha ohorario e o tipo de sessão</h1>
            <div style={{display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                height: '70px'
            }}>
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
            <h1 style={{textAlign: 'center', fontSize: '28px'}}>Horários disponíveis</h1>

            <div className="box-sessao">
            {sessoes.map((sessao)=>{
                const sep = sessao.dataHora.split(' ')
                // console.log('sep', sep);
                return <Link className='sessao-item' key={sessao.idSessao}>
                <p className='titulo-data'>{sep[0]}</p>
                <p className='titulo-hora'>{sep[1]}</p>
                <p>{sessao.tipoSessao}</p>
            </Link>
            }
                
            )}
            </div>
        </div>
    );
}

export default SessoesFilme;
