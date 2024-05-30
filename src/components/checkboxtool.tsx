import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';



const CheckboxesExample = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4}  className="checkbox-image-container">
          <Form>  
            <Form.Check // prettier-ignore
            type="checkbox"
            id="check-box"/></Form>
            <Image src="https://skillicons.dev/icons?i=js" rounded />
          </Col>
          <Col xs={6} md={4} className="checkbox-image-container">
          <Form>  
            <Form.Check // prettier-ignore
            type="checkbox"
            id="check-box"/></Form>
            <Image src="https://skillicons.dev/icons?i=html" roundedCircle />
          </Col>
          <Col xs={6} md={4} className="checkbox-image-container">
          <Form>  
            <Form.Check // prettier-ignore
            type="checkbox"
            id="check-box"/></Form>
            <Image src="https://skillicons.dev/icons?i=css" thumbnail />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CheckboxesExample;
