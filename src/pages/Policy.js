import { Row, Col, Container, ListGroup } from "react-bootstrap";
import useFirestore from "../hooks/useFirestore";
import SkeletonArticle from "../skeletons/SkeletonArticle";

const Policy = () => {
  const { policyPageDetails, policyPageItems } = useFirestore("policyPage");
  return (
    <div className="shortPageContainer mb-5">
      <Container>
        <Row>
          <Col className="text-center m-5">
            <h2>Policies</h2>
            <h5>
              <em>
                {policyPageDetails && policyPageDetails.policyPageSubtitle}
                {!policyPageDetails && <SkeletonArticle theme="light" />}
              </em>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup variant="flush text-center">
              {policyPageItems &&
                policyPageItems.map((policies) => (
                  <ListGroup.Item as="h5" key={policies.id}>
                    {policies.policy}
                  </ListGroup.Item>
                ))}
              {!policyPageItems &&
                [1, 2, 3, 4, 5, 6, 7].map((n) => (
                  <ListGroup.Item as="h5" key={n}>
                    <SkeletonArticle theme="light" />
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
