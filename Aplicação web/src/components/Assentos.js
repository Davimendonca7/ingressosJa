import React from 'react';
import './Assentos.css';

const Assentos = () => {
  const assentos = [
    // { numero: 'A1', disponivel: true },
    { numero: 'A2', disponivel: false },
    { numero: 'A3', disponivel: true },
    { numero: 'A4', disponivel: true },
    { numero: 'A5', disponivel: false },
    { numero: 'A6', disponivel: true },
    { numero: 'A7', disponivel: false },
    { numero: 'A8', disponivel: true },
    { numero: 'A9', disponivel: true },
    { numero: 'A10', disponivel: false },
    { numero: 'B1', disponivel: true },
    { numero: 'B2', disponivel: false },
    { numero: 'B3', disponivel: true },
    { numero: 'B4', disponivel: true },
    { numero: 'B5', disponivel: false },
    { numero: 'B6', disponivel: true },
    { numero: 'B7', disponivel: false },
    { numero: 'B8', disponivel: true },
    { numero: 'B9', disponivel: true },
    { numero: 'B10', disponivel: false },
    { numero: 'C1', disponivel: true },
    { numero: 'C2', disponivel: false },
    { numero: 'C3', disponivel: true },
    { numero: 'C4', disponivel: true },
    { numero: 'C5', disponivel: false },
    { numero: 'C6', disponivel: true },
    { numero: 'C7', disponivel: false },
    { numero: 'C8', disponivel: true },
    { numero: 'C9', disponivel: true },
    { numero: 'C10', disponivel: false },
    { numero: 'D1', disponivel: true },
    { numero: 'D2', disponivel: false },
    { numero: 'D3', disponivel: true },
    { numero: 'D4', disponivel: true },
    { numero: 'D5', disponivel: false },
    { numero: 'D6', disponivel: true },
    { numero: 'D7', disponivel: false },
    { numero: 'D8', disponivel: true },
    { numero: 'D9', disponivel: true },
    { numero: 'D10', disponivel: false },
    { numero: 'E1', disponivel: true },
    { numero: 'E2', disponivel: false },
    { numero: 'E3', disponivel: true },
    { numero: 'E4', disponivel: true },
    { numero: 'E5', disponivel: false },
    { numero: 'E6', disponivel: true },
    { numero: 'E7', disponivel: false },
    { numero: 'E8', disponivel: true },
    { numero: 'E9', disponivel: true },
    { numero: 'E10', disponivel: false },
    { numero: 'F1', disponivel: true },
    { numero: 'F2', disponivel: false },
    { numero: 'F3', disponivel: true },
    { numero: 'F4', disponivel: true },
    { numero: 'F5', disponivel: false },
    { numero: 'F6', disponivel: true },
    { numero: 'F7', disponivel: false },
    { numero: 'F8', disponivel: true },
    { numero: 'F9', disponivel: true },
    { numero: 'F10', disponivel: false },
    { numero: 'G1', disponivel: true },
    { numero: 'G2', disponivel: false },
    { numero: 'G3', disponivel: true },
    { numero: 'G4', disponivel: true },
    { numero: 'G5', disponivel: false },
    { numero: 'G6', disponivel: true },
    { numero: 'G7', disponivel: false },
    { numero: 'G8', disponivel: true },
    { numero: 'G9', disponivel: true },
    { numero: 'G10', disponivel: false },
    { numero: 'H1', disponivel: true },
    { numero: 'H2', disponivel: false },
    { numero: 'H3', disponivel: true },
    { numero: 'H4', disponivel: true },
    { numero: 'H5', disponivel: false },
    { numero: 'H6', disponivel: true },
    { numero: 'H7', disponivel: false },
    { numero: 'H8', disponivel: true },
    { numero: 'H9', disponivel: true },
    { numero: 'H10', disponivel: false },
    { numero: 'I1', disponivel: true },
    { numero: 'I2', disponivel: false },
    { numero: 'I3', disponivel: true },
    { numero: 'I4', disponivel: true },
    { numero: 'I5', disponivel: false },
    { numero: 'I6', disponivel: true },
    { numero: 'I7', disponivel: false },
    { numero: 'I8', disponivel: true },
    { numero: 'I9', disponivel: true },
    { numero: 'I10', disponivel: false },
    { numero: 'J1', disponivel: true },
    { numero: 'J2', disponivel: false },
    { numero: 'J3', disponivel: true },
    { numero: 'J4', disponivel: true },
    { numero: 'J5', disponivel: false },
    { numero: 'J6', disponivel: true },
    { numero: 'J7', disponivel: false },
    { numero: 'J8', disponivel: true },
    { numero: 'J9', disponivel: true },
    { numero: 'J10', disponivel: false },
    { numero: 'K1', disponivel: true },
    { numero: 'K2', disponivel: false },
    { numero: 'K3', disponivel: true },
    { numero: 'K4', disponivel: true },
    { numero: 'K5', disponivel: false },
    { numero: 'K6', disponivel: true },
    { numero: 'K7', disponivel: false },
    { numero: 'K8', disponivel: true },
    { numero: 'K9', disponivel: true },
    { numero: 'K10', disponivel: false },
    { numero: 'L1', disponivel: true },
    { numero: 'L2', disponivel: false },
    { numero: 'L3', disponivel: true },
    { numero: 'L4', disponivel: true },
    { numero: 'L5', disponivel: false },
    { numero: 'L6', disponivel: true },
    { numero: 'L7', disponivel: false },
    { numero: 'L8', disponivel: true },
    { numero: 'L9', disponivel: true },
    { numero: 'L10', disponivel: false },
    { numero: 'L20', disponivel: true },
    { numero: 'E15', disponivel: false },
    
  ];

  const totalRows = 12; // A até M
  const totalColumns = 20; // 1 até 10

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
              return (
                <button
                  key={seatNumber}
                  value={seatNumber}
                  className={`assento ${assento ? (assento.disponivel ? 'disponivel' : 'ocupado') : ''}`}
                  onClick={(e)=>{console.log(e.target.value)}}
                >
                  {assento ? (assento.disponivel ? '' : '') : ''}
                </button>
              );
            })}
          </React.Fragment>
        ))}
      </div>
      <div className="legenda">
        <div className="col-assento">
        <div className="assento-disponivel"></div><p>Disponível</p>
        </div>
        <div className="col-assento">
        <div className="assento-indisponivel"></div><p>Indisponível</p>
        </div>
      </div>
    </div>
  );
};

export default Assentos;
