import { Row, Col, Container, ListGroup } from "react-bootstrap";

const Policy = () => {
  return (
    <div className="shortPageContainer mb-5">
      <Container>
        <Row>
          <Col className="text-center m-5">
            <h2>Policies</h2>
            <h5>
              <em>
                Music is meant to be enjoyed, and is enjoyed most when a student
                feels capable. I teach technique, reading, composition, theory,
                and performance pieces so each student can progress and love
                what they do.
              </em>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup variant="flush text-center">
              <ListGroup.Item as="h5">
                I can guarantee success and enjoyment for any student if they
                are willing to practice 5 to 7 days a week, if they are open
                with me, if they have the support of their family, and if they
                have or are working to get a well-maintained acoustic piano.
                These are hard requirements for my studio.
              </ListGroup.Item>
              <ListGroup.Item as="h5">
                I encourage competency-based practicing (practice until the task
                is easy) rather than a certain number of minutes every day.
                Parents are welcome to enforce time minimums on their children
                and discuss these with me if they find it effective.
              </ListGroup.Item>
              <ListGroup.Item as="h5">
                Assignment instructions and students’ practice sessions are
                recorded automatically at{" "}
                <a
                  href="http://www.betterpracticeapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.betterpracticeapp.com
                </a>
                . The subscription fee for this service is included in tuition.
              </ListGroup.Item>
              <ListGroup.Item as="h5">
                Parents of young students must attend lessons with their
                children, in order to help with practice at home. For older
                students, parents are encouraged to attend lessons if possible.
                If not possible, please view the students’ online practice chart
                every week. Lessons of students with special needs, or
                “motivationally challenged” students may require parental
                attendance.
              </ListGroup.Item>
              <ListGroup.Item as="h5">
                Performance builds confidence, motivates practice, marks
                progress, and celebrates a student's hard work. We have periodic
                studio recitals, as well as participation in the National
                Federation of Music Clubs adjudication festivals annually. This
                event gives students insights from other piano teachers and is
                typically the favorite event of the year.
              </ListGroup.Item>
              <ListGroup.Item as="h5">
                I am familiar with a wide range of piano methods, and will
                select one that fits each students' prior ability, learning
                style, and personality. I love to teach the classics,
                underrepresented historical composers, and modern composers in a
                variety of styles. It is important to me that students love at
                least most of their study pieces!
              </ListGroup.Item>
              <ListGroup.Item as="h5">
                My personality is frank, candid, and friendly. As we get to know
                each other, I want students to be honest with me in regards to
                their progress, their interests, their difficulties, and their
                goals. This will allow me to help them love their developing
                talent.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Policy;
