import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemColor = () => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>Nombre color <Button variant='danger'>Borrar</Button>  </ListGroup.Item>
    );
};

export default ItemColor;