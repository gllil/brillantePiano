import { Row, Col, Container } from "react-bootstrap";
import TuitionCard from "../components/TuitionCard";
import useFirestore from "../hooks/useFirestore";

const Tuition = () => {
  const { tuitionItems } = useFirestore("tuition");
  return (
    <div className="shortPageContainer mb-5">
      <Container className="tuitionDetailsBox">
        <Row>
          <Col className="text-center" xs={12}>
            <h2>Tuition</h2>
          </Col>
        </Row>
        <Row className="cardsWrapper justify-content-center mt-5">
          {tuitionItems &&
            tuitionItems.map((items) => (
              <TuitionCard
                key={items.id}
                docId={items.id}
                cardBadge={items.badge}
                titleOne={items.timeOfYear}
                titleTwo={items.price}
                subtitle={items.subPrice}
                live={true}
              />
            ))}
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
