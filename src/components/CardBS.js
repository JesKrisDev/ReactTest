import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardBS() {
  return (
    <div>

      <br></br>
      <br></br>
      <Container>
     
      <Row>
       
       <Col>
         <Card style={{ width: '18rem' }}  >
         <Card.Img variant="top"  src="../../images/armorT.png"/>
         <Card.Body>
         <Card.Title>Card Title</Card.Title>
         <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
         </Card.Body>
         </Card>
        </Col>

    <Col>       
     <Card style={{ width: '18rem'  }}>
      <Card.Img variant="top" src="../../images/armor.png"/>
       <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
    </Col>


    <Col>  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../../images/armorT.png"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
    </Col>

      </Row>
    </Container>
    



      

    </div>
  );
}

export default CardBS;