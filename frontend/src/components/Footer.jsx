/* eslint-disable */
import { Container, Row, Col, } from "react-bootstrap";


const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
      <footer className='container-fluid bg-primary'>
        <Container>
          <Row >
            <Col className='text-center py-3 mt-2'>
              <p>E-Com Test &copy; {currentYear}</p>
            </Col>
          </Row>
        </Container>
      </footer>

  )
}

export default Footer
