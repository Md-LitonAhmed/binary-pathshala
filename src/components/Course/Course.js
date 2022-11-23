import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';


function Course(props) {
    const {img, price, name,Description}=props.data;
    const handler=props.handler;
  return (
    <Card >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title><span id='titleColor'>{name}</span></Card.Title>
        <Card.Text>
          {Description}
          <br />
          <p id='price'>Price: {price}$</p>
        </Card.Text>
        <Button variant="primary" onClick={()=>handler(props.data)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Course;