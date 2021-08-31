import { Accordion, Col, Container, Row } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="shortPageContainer mb-5">
      <Container>
        <Row>
          <Col className="text-center m-5">
            <h2>FAQ</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h4>What kind of piano do we need?</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    A good quality upright is acceptable for many students to
                    begin with. An advanced student will need a grand piano. I
                    am willing to help parents choose a quality piano.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h4>Should I attend my child's lessons?</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    I encourage parents to attend lessons occasionally in order
                    to be effective practice coaches. Parents of young beginners
                    should attend every week.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h4>How serious are you about daily practice?</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Very serious! I expect parents to require their children to
                    practice 5-7 days per week, to be excited cheerleaders and
                    coaches, and to sign practice charts each week.
                  </p>
                  <p>
                    I have fun incentives to help with practicing: contests,
                    achievement charts, stickers, candy bars and trophies.
                    Ultimately, the music itself will become the greatest
                    incentive and that has been the case with most of our high
                    school students (although they'll still accept a candy
                    bar!).
                  </p>
                  <p>
                    Practicing is necessary for success and I like to guarantee
                    success, so a student who consistently under-practices is
                    placed on a 3-month probation. If the student improves his
                    practice routine in that time, he will be returned to good
                    standing. If not, he needs a new situation outside my studio
                    and I will recommend some other possibilities.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h4>
                    How long should I expect a daily practice session to take?
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Here are some guidelines, but individual practice will vary
                    according to goals and abilities:
                  </p>
                  <ul>
                    <li>Young beginner: 10 minutes</li>
                    <li>Elementary-age student: 30 minutes</li>
                    <li>Middle-school student: 45 minutes</li>
                    <li>High school student: 1 hour</li>
                    <li>
                      Advanced high school student (college-bound): 2 hours or
                      more
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h4>What if we have to miss a lesson?</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    I expect 24 hours notice, except in the case of illness or
                    emergency. (Please don't come if you're sick!) Without 24
                    hours notice, no make-up will be scheduled.
                  </p>
                  <p>There are no make-ups for missed group lessons.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h4>Do you teach lessons in the summer?</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    I do not require it, but I strongly encourage it, as summer
                    can be one of the most enjoyable and effective times for a
                    student to practice and grow. In addition, taking a 3-month
                    break often makes it difficult to feel happy about starting
                    again in the fall. I teach 11 months of the year, with a
                    brief break in December and a month-long break in August.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <h4>How often should we tune our piano?</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Pianos should be tuned at least yearly, new pianos twice
                    yearly. John Backels is our tuner who comes up from Salt
                    Lake frequently. His phone number is (801) 466-1235. Two
                    good local tuner/technicians are LaMar Watts and Russell
                    Sorenson.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  <h4>Do your students compete?</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Piano competitions are good for some students, and too
                    stressful for others. If a student wants to participate in a
                    competition, I will help him or her prepare and enjoy the
                    process.
                  </p>
                  <p>
                    All of our students perform in the Federation Junior
                    Festival, which is noncompetitive but which is judged and
                    scored, and students earn Gold Cup Trophies in graduated
                    sizes for their achievements over the years.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  <h4>
                    Do you teach students with learning challenges or special
                    needs?
                  </h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Yes! Every child deserves music lessons. Because of the
                    significant whole-brain activity generated by music study
                    and the resultant scientifically-measurable increase in IQ,
                    piano lessons are actually a viable cognitive therapy for
                    those with intellectual disabilities. Because of the
                    significant boost to identity and self-confidence, piano
                    lessons also provide great social and emotional therapy, and
                    help develop study skills and problem-solving skills. I have
                    extensively studied psychology theories and atypical
                    approaches to learning, and am always eager to research
                    more.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
