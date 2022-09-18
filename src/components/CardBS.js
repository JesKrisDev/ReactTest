import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardBS() {
  return (
    <div>
    <Card style={{ width: '18rem', display:'flex' }}  >
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

        <Card style={{ width: '18rem' , display:'flex' }}>
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

        <Card style={{ width: '18rem' , display:'flex'}}>
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

    </div>
  );
}

export default CardBS;