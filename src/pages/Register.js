import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Register = () => {
  return (
    <div>
      <div>
        <Container className='mb-5 mt-5'>
          <Row className='text-center'>
            <h2>Register</h2>
          </Row>

          <Row className='justify-content-center'>
            <Col xs={12} md={6}>
              <Form>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' name='email' required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' name='password' required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type='password'
                    name='confirmPassword'
                    required
                  />
                </Form.Group>
                <Button className='mt-3'>Register</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Register;
