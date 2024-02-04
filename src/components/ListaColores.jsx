import ListGroup from 'react-bootstrap/ListGroup';
import ItemColor from './ItemColor';

const ListaColores = ({arrayColores, borrarColor}) => {
    return (
        
    <ListGroup> {
        arrayColores.map((color, posicionColor)=><ItemColor key={posicionColor} nombreColor={color} borrarColor={borrarColor} ></ItemColor>)
        }
      
    </ListGroup>
       
    );
};

export default ListaColores;
