import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemColor = ({nombreColor}) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'> {nombreColor} <Button variant='danger'>Borrar</Button>  </ListGroup.Item>
    );
};

export default ItemColor;