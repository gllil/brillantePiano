import { Row, Col, Container, ListGroup } from "react-bootstrap";
import useFirestore from "../hooks/useFirestore";

const Policy = () => {
  const { policyPageDetails, policyPageItems } = useFirestore("policyPage");
  return (
    <div className="shortPageContainer mb-5">
      <Container>
        <Row>
          <Col className="text-center m-5">
            <h2>Policies</h2>
            <h5>
              <em>{policyPageDetails.policyPageSubtitle}</em>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup variant="flush text-center">
              {policyPageItems.map((policies) => (
                <ListGroup.Item as="h5" key={policies.id}>
                  {policies.policy}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Policy;
