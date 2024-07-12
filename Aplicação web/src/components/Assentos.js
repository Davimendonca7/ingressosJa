import React, { useEffect, useState } from 'react';
import './Assentos.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Assentos = () => {
  const { idSessao, idSala } = useParams();
  const [assentos, setAssentos] = useState([]);
  const [maxRow, setMaxRow] = useState('A');
  const [maxColumn, setMaxColumn] = useState(1);
  const [json, setJson] = useState([])
 

  

  useEffect(() => {
    axios.get(`http://localhost:8080/assento/sessao/${idSessao}/sala/${idSala}`)
      .then(response => {
        const assentos = response.data;
        setAssentos(assentos);
        console.log('assentos', assentos);
        // Determina a última linha e coluna presentes nos dados recebidos
        const rows = assentos.map(a => a.numero[0]);
        const columns = assentos.map(a => parseInt(a.numero.slice(1)));

        const maxRow = String.fromCharCode(Math.max(...rows.map(r => r.charCodeAt(0))));
        const maxColumn = Math.max(...columns);

        setMaxRow(maxRow);
        setMaxColumn(maxColumn);
      })
      .catch(error => {
        console.error('Erro ao enviar requisição:', error);
      });
  }, [idSessao, idSala]);

  const totalRows = maxRow.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  const totalColumns = maxColumn;

  const rows = Array.from({ length: totalRows }, (_, i) => String.fromCharCode(65 + i));
  const columns = Array.from({ length: totalColumns }, (_, i) => i + 1);

  return (
    <div className="assentos-container">
      <h2>Escolha o Seu Assento</h2>
      <div className="assentos-grid" style={{ gridTemplateColumns: `repeat(${columns.length + 1}, 30px)` }}>
        <div className="grid-label"></div>
        {columns.map((col) => (
          <div key={col} className="grid-label">{col}</div>
        ))}
        {rows.map((row) => (
          <React.Fragment key={row}>
            <div className="grid-label">{row}</div>
            {columns.map((col) => {
              const seatNumber = `${row}${col}`;
              const assento = assentos.find(a => a.numero === seatNumber);
              // console.log(assento.tipo);
              return (
                <button
                  key={seatNumber}
                  value={assento && assento.idAssento !== undefined ? assento.idAssento : seatNumber}
                  className={`assento ${assento ? (assento.disponivel ? 'disponivel' : 'ocupado') : ''} ${assento && assento.tipo ? assento.tipo : ''} ${seatNumber}`}
                  onClick={(e) => {
                    const assentoDiv = document.querySelector(`.${seatNumber}`);
                    const idAssento = e.target.value;
                
                    const index = json.findIndex(item => item.assento === idAssento);
                    
                    if (index !== -1) {
                        
                        const updatedJson = json.filter(item => item.assento !== idAssento);
                        setJson(updatedJson);
                        assentoDiv.style.backgroundColor = '#ffffff'; 
                        
                    } else {
                        
                        const agora = new Date();
                        const horaAtual = agora.toLocaleTimeString();
                        const data = {
                            dataHora: horaAtual,
                            cliente: sessionStorage.ID_USUARIO,
                            sessao: idSessao,
                            assento: idAssento,
                            preco: 20.2
                        };
                
                        setJson((prevJson) => [...prevJson, data]);
                        assentoDiv.style.backgroundColor = '#fff200'; 
                        console.log('JSON para compra', [...json, data]);
                    }
                }}
                
                  disabled={assento ? !assento.disponivel : true}
                >
                  
                </button>
              );
            })}
          </React.Fragment>
        ))}
      </div>
      <div className="legenda">
      <div className="col-assento"
      style={{marginBottom: '30px'}}>
          <div className="assento-disponivel vip"></div><p>Ingresso vip</p>
          <div className="assento-disponivel normal"></div><p>Ingresso normal</p>
        </div>
        <div className="col-assento">
          <div className="assento-disponivel"></div><p>Disponível</p>
        </div>
        <div className="col-assento">
          <div className="assento-indisponivel"></div><p>Indisponível</p>
        </div>
        <div className="col-assento">
          <div className="assento-selecionado"></div><p>Selecionado</p>
        </div>
      </div>
    </div>
  );
};

export default Assentos;
