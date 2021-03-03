
import Car from './Car';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Cars = ({ cars, onDelete }) => {
  return (
    <>
      <h1 className="mt-5 mb-5">Car Choices<hr/></h1>
      
      <Row className="cars-row">
        {cars.map((car) => (
          <Col key={car.id} md={4}>
            <Car onDelete={onDelete} key={car.id} car={car} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cars

