import { Badge, Button, Card, Col } from "react-bootstrap";

const TuitionCard = ({
  cardBadge,
  titleOne,
  titleTwo,
  subtitle,
  manage,
  live,
}) => {
  return (
    <Col xs={12} sm={6} xl={3} className="mt-4 ">
      <Card className="tuitionCards">
        <h2 className="text-center badgeWrapper">
          <Badge pill>{cardBadge}</Badge>
        </h2>
        <Card.Body className="align-items-center">
          <Card.Title as="h3">{titleOne}</Card.Title>
          <Card.Title as="h4">{titleTwo}</Card.Title>
          <Card.Subtitle as="em">{subtitle}</Card.Subtitle>
          <Card.Text>
            {live && (
              <Button size="sm" className="mt-2" href="/#contactMe">
                Get Started
              </Button>
            )}
            {manage && (
              <Button size="sm" className="mt-2">
                Delete
              </Button>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TuitionCard;
