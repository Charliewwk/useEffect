import { Card } from 'react-bootstrap'
import './detallePedido.css'

const DetallePedido = (mostrarDetalle) => {
  return (
    <>
        <Card className='cardDetalle'>
            <Card.Header>
            Detalles del Pedido
            </Card.Header>
            <Card.Body>
            Producto: Pizza de Muzzarella
            </Card.Body>
            <Card.Footer>
            <p className="mismaLinea">Cantidad: 1</p>
            <p className="mismaLinea">Precio: $10.00</p>
            </Card.Footer>
        </Card>
    </>
    )
}

export default DetallePedido