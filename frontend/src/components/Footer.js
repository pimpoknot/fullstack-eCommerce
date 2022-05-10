import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; ProShop
          </Col>
        </Row>
      </Container>
      <p>Footer</p>
    </footer>
  )
}

export default Footer