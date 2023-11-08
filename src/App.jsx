import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import DetallePedido from "../src/components/detallePedido/DetallePedido";
import Cargando from "../src/components/cargando/Cargando"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [mostrarCargando, setMostrarCargando] = useState(true)

  useEffect(() => {
    console.log("1 comienzo 2 segundos...");
    const mostrarDetalleTimeout = setTimeout(() => {
      console.log("2 montar detalle");
      setMostrarDetalle(true);
      setMostrarCargando(false)
      console.log("3 finaliza 2 segundos");
    }, 2000);
    console.log("4 sigue ejecución async mientras espera 2 segundos");
    return () => {
      clearTimeout(mostrarDetalleTimeout);
    };
  }, []);

  const handlePedido = () => {
    console.log("5 handle pedido");
    if (mostrarDetalle) {
      console.log("6 desmontar detalle");
      setMostrarDetalle(false);
    } else {
      console.log("7 reload");
      const reloadTimeout = setTimeout(() => {
        console.log("8 reload 2 segundos...");
        window.location.reload();
      }, 2000);
      console.log("10 continua ejecución async mientras espera 2 segundos");
      return () => {
        clearTimeout(reloadTimeout);
      };
    }
  };

  return (
    <>
      <div className="centered-container">
        <h1>Su Pedido</h1>
        {mostrarCargando && <Cargando />}
        {mostrarDetalle && <DetallePedido />}
        {!mostrarCargando &&
          <Button onClick={handlePedido}>{mostrarDetalle ? 'Cancelar Pedido' : 'Recargar'}</Button>
        }
      </div>
    </>
  );
};

export default App;
