import { useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { auth } from "../firebase/config";
import { AuthContext } from "../auth/Auth";

const Login = ({ history }) => {
  const [loginForm, setLoginForm] = useState({});
  const loginform = document.getElementById("loginForm");

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(loginForm.email, loginForm.password)
      .then(() => {
        loginform.reset();
        history.push("/admin");
        console.log("login successful");
      })
      .catch((err) => console.error(err));
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/admin" />;
  }

  return (
    <div className="shortPageContainer">
      <Container className="mb-5 mt-5 ">
        <Row className="text-center">
          <h2>Login</h2>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Form
              id="loginForm"
              onChange={handleFormChange}
              onSubmit={handleFormSubmit}
            >
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" required />
              </Form.Group>
              <Button type="submit" className="mt-3">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Login);
