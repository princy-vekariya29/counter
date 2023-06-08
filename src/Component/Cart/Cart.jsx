import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
// import Car1 from '../../../../public/Images/Car1.jpg'
// import Car2 from '../../../../public/Images/Car2.jpg'
// import Car3 from '../../../../public/Images/Car3.jpg'
// import Car4 from '../../../../public/Images/Carr4.jpg'
import F1 from '../../assets/Images/F1.jfif';
import f2 from '../../assets/Images/f2.jfif';
import f3 from '../../assets/Images/f3.jfif';
import f4 from '../../assets/Images/f4.jfif';
import Counter from '../Counter/Counter';

function Cart() {
  return (
    <Container>
      <Row xs={1} md={4} className="mt-4">
        {/* {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}> */}
        <Card>
          <Card.Img variant="top" src={F1} />
          <Card.Body>
            <Card.Title>Foodies Food</Card.Title>
            <Card.Text>
            From healthy food sayings to famous food quotes, any foodie is sure to find something enjoyable here.
            </Card.Text>
            <Counter />
          </Card.Body>
        </Card>

        {/* </Col>
      ))} */}
        <Card>
          <Card.Img variant="top" src={f2} />
          <Card.Body>
            <Card.Title>Burger Food</Card.Title>
            <Card.Text>
            Sometimes me think, ‘What is Friend?’ and then me say, ‘Friend is someone to share the last cookie with.
            </Card.Text>
            <Counter />
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={f3} />
          <Card.Body>
            <Card.Title>Frankie Food </Card.Title>
            <Card.Text>
            Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. 
            </Card.Text>
            <Counter />
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={f4} />
          <Card.Body>
            <Card.Title>Maxican Panner</Card.Title>
            <Card.Text>
            Food can be very transformational, and it can be more than just about a dish. That’s what happened to me when I first went to France.
            </Card.Text>
            <Counter />
          </Card.Body>
        </Card>
      </Row>
    </Container>

  );
}

export default Cart;