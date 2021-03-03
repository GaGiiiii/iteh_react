import { FaTimes } from 'react-icons/fa';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'

const Task = ({ car }) => {

  function description() {
    if (car.desc.length > 150) {
      return <Accordion>
        {car.desc.substring(0, 150)}
        <Accordion.Collapse eventKey="0">
          <Card.Body className="p-0">{car.desc.substring(150)}</Card.Body>
        </Accordion.Collapse>
        <Accordion.Toggle className="pl-0 d-block" as={Button} variant="link" eventKey="0">
          Show more
        </Accordion.Toggle>

      </Accordion>;
    }

    return car.desc;
  }

  return (
    <Card>
      <Card.Img variant="top" src={car.img} />
      <Card.Body>
        <Card.Title>{car.name}</Card.Title>
        <Card.Text>
          {description()}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Task
