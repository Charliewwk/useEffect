import React from 'react';
import { Spinner } from 'react-bootstrap';

const Cargando = ({ mensaje }) => {
  return (
    <div className="text-center">
      <Spinner animation="border" variant="primary" />
      <p>{mensaje}...</p>
    </div>
  );
};

export default Cargando;
