import React from 'react';
import { Spinner } from 'react-bootstrap';

const Cargando = () => {
  return (
    <div className="text-center">
      <Spinner animation="border" variant="primary" />
      <p>Cargando...</p>
    </div>
  );
};

export default Cargando;
