import { Row, Col, Container, Card, Badge, Button } from "react-bootstrap";

const Tuition = () => {
  return (
    <div className="shortPageContainer mb-5">
      <Container className="tuitionDetailsBox">
        <Row>
          <Col className="text-center" xs={12}>
            <h2>Tuition</h2>
          </Col>
        </Row>
        <Row className="cardsWrapper justify-content-center mt-5">
          <Col xs={12} sm={6} xl={3} className="mt-4 ">
            <Card className="tuitionCards">
              <h2 className="text-center badgeWrapper">
                <Badge pill>30 Minute Lessons</Badge>
              </h2>
              <Card.Body className="align-items-center">
                <Card.Title as="h3">Academic Year</Card.Title>
                <Card.Title as="h4">$80/month</Card.Title>
                <Card.Subtitle as="em">$720/academic year</Card.Subtitle>
                <Card.Text className="align-self-end">
                  <Button size="sm" className="mt-2" href="/#contactMe">
                    Get Started
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} xl={3} className="mt-4 ">
            <Card className="tuitionCards">
              <h2 className="text-center badgeWrapper">
                <Badge pill>30 Minute Lessons</Badge>
              </h2>
              <Card.Body className="align-items-center">
                <Card.Title as="h3">Summer Break</Card.Title>
                <Card.Title as="h4">$165</Card.Title>
                <Card.Subtitle as="em">6-8 Summer lessons</Card.Subtitle>
                <Card.Text className="align-self-end">
                  <Button size="sm" className="mt-2" href="/#contactMe">
                    Get Started
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} xl={3} className="mt-4 ">
            <Card className="tuitionCards">
              <h2 className="text-center badgeWrapper">
                <Badge pill>45 Minute Lessons</Badge>
              </h2>
              <Card.Body className="align-items-center">
                <Card.Title as="h3">Academic Year</Card.Title>
                <Card.Title as="h4">$100/month</Card.Title>
                <Card.Subtitle as="em">$900/academic year</Card.Subtitle>
                <Card.Text className="align-self-end">
                  <Button size="sm" className="mt-2" href="/#contactMe">
                    Get Started
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} xl={3} className="mt-4 ">
            <Card className="tuitionCards">
              <h2 className="text-center badgeWrapper">
                <Badge pill>45 Minute Lessons</Badge>
              </h2>
              <Card.Body className="align-items-center">
                <Card.Title as="h3">Summer Break</Card.Title>
                <Card.Title as="h4">$210</Card.Title>
                <Card.Subtitle as="em">6-8 Summer lessons</Card.Subtitle>
                <Card.Text>
                  <Button size="sm" className="mt-2" href="/#contactMe">
                    Get Started
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
            <p className="text-muted">
              <em>
                The monthly payment does not vary even if the number of lessons
                does. Billing and payments can be handled through venmo, check,
                or cash. There is an annual registration fee of $20 per student
                (to help pay for music lending, materials, incentives, recitals,
                trophies, parties, etc.)
              </em>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tuition;
