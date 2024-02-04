import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ListaColores from './ListaColores';

const FormularioColor = () => {
    return (
        <section>
            <Card className='my-4'>
      <Card.Header>Administrar colores</Card.Header>
      <Card.Body className='bg-secondary'>
      <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label >Color</Form.Label>
        <Form.Control type="text" placeholder="Ingrese un color ej. Blue" minLength={2} maxLength={20}/>
      </Form.Group>
      
    </Form>
    
      </Card.Body>
      <Button variant="info" type='submit'>Guardar</Button>
    </Card>
    <ListaColores/>
            
        </section>
    );
};

export default FormularioColor;