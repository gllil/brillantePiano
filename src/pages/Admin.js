import { Col, Container, Row, Button } from "react-bootstrap";
import { auth } from "../firebase/config";

import AdminTabs from "../components/AdminTabs";

const Admin = () => {
  const handleLogOut = (e) => {
    e.preventDefault();
    auth.signOut();
  };

  return (
    <div className="shortPageContainer mb-5">
      <Container>
        <Row>
          <Col className="text-end">
            <Button onClick={handleLogOut} size="sm" className="mt-2">
              Logout
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center m-3">
            <h2>Manage Page</h2>
          </Col>
        </Row>

        <AdminTabs />
      </Container>
    </div>
  );
};

export default Admin;
