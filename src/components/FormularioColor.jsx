import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListaColores from "./ListaColores";
import { useState } from "react";

const FormularioColor = () => {
  const [color, setColor] = useState("");
  const [colores, setColores] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();

    setColores([...colores, color]);
    setColor("");
  }


  return (
    <section>
      <Card className="my-4">
        <Card.Header>Administrar colores</Card.Header>
        <Card.Body className="bg-secondary">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un color ej. Blue"
                minLength={2}
                maxLength={20}
                onChange={(e)=> setColor(e.target.value)}
                value={color}
              />
            </Form.Group>
            <Button variant="info" type="submit">
          Guardar
        </Button>
          </Form>
        </Card.Body>
        
      </Card>
      <ListaColores arrayColores={colores} />
    </section>
  );
};

export default FormularioColor;
