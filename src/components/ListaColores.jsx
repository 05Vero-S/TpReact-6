import ListGroup from 'react-bootstrap/ListGroup';
import ItemColor from './ItemColor';

const ListaColores = ({arrayColores}) => {
    return (
        
    <ListGroup> {
        arrayColores.map((color, posicionColor)=><ItemColor key={posicionColor} nombreColor={color} ></ItemColor>)
        }
      
    </ListGroup>
       
    );
};

export default ListaColores;
