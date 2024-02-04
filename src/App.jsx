
import { Container } from 'react-bootstrap'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import FormularioColor from './components/FormularioColor'

function App() {
  

  return (
    <Container className='my-4'>
      <h1 className='text-center my-3'>Paleta de Colores</h1>
      <FormularioColor/>

    </Container>
  )
}

export default App
