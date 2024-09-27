

import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import PersonList from './components/PersonList'

function App() {


  return (
    <>

      <Container className='py-3'>
        <Row>
          <PersonList />
        </Row>
      </Container>

    </>
  )
}

export default App
