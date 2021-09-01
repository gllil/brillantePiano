import { useState } from "react";
import {
  Col,
  Container,
  Form,
  Row,
  Button,
  Spinner,
  ListGroup,
} from "react-bootstrap";
import { firestore } from "../firebase/config";
import { DateTime } from "luxon";
import useFirestore from "../hooks/useFirestore";

const ManageCalendar = () => {
  const { calendarItems } = useFirestore("calendarItems");
  const [calendarForm, setCalendarForm] = useState({});
  const [successAddEvent, setsuccessAddEvent] = useState(false);
  const [addEventLoad, setAddEventLoad] = useState(false);
  const [allDayChecked, setAllDayChecked] = useState(false);
  const calendarRef = firestore.collection("calendarItems");
  const addEventForm = document.getElementById("addEventForm");

  const handleDate = (dateStr) => {
    let dateObj = DateTime.fromISO(dateStr);
    let newFormat = dateObj.toLocaleString(DateTime.DATE_FULL);
    return newFormat;
  };
  const handleTime = (dateStr) => {
    let dateObj = DateTime.fromISO(dateStr);
    let newFormat = dateObj.toLocaleString(DateTime.TIME_SIMPLE);
    return newFormat;
  };

  const convertTimeAndDateToIso = (date, time) => {
    let calDate = date;
    let calTime = time;
    let isoTime = `${calDate}T${calTime}`;
    return isoTime;
  };

  const handleCalendarFormChange = (e) => {
    const { name, value } = e.target;
    setCalendarForm({ ...calendarForm, [name]: value });
  };

  const handleCheckBox = (e) => {
    setAllDayChecked(e.target.checked);
  };

  const handleCalendarFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let event;
    if (allDayChecked) {
      event = {
        title: calendarForm.title,
        description: calendarForm.description,
        start: calendarForm.date,
        allDay: true,
      };
    } else {
      event = {
        title: calendarForm.title,
        description: calendarForm.description,
        start: convertTimeAndDateToIso(
          calendarForm.date,
          calendarForm.startTime
        ),
        end: convertTimeAndDateToIso(calendarForm.date, calendarForm.endTime),
      };
    }

    setAddEventLoad(true);
    calendarRef
      .add(event)
      .then(() => {
        setsuccessAddEvent(true);
        setCalendarForm({});
        addEventForm.reset();
        setAddEventLoad(false);
        setAllDayChecked(false);
        setTimeout(() => setsuccessAddEvent(false), 2000);
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteEvent = (e, itemId) => {
    e.preventDefault();
    e.stopPropagation();
    calendarRef
      .doc(itemId)
      .delete()
      .then(() => {
        console.log("Deleted Successfully");
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col className="text-center m-3">
              <h4>Add Calendar Event</h4>
            </Col>
          </Row>
          <Form
            id="addEventForm"
            onSubmit={handleCalendarFormSubmit}
            onChange={handleCalendarFormChange}
          >
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control type="text" name="title" required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Event Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    name="description"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Event Date</Form.Label>
                  <Form.Control type="date" name="date" required />
                  <Form.Check
                    onChange={handleCheckBox}
                    type="checkbox"
                    name="allDay"
                    label="All Day Event"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Start Time</Form.Label>
                  <Form.Control
                    disabled={allDayChecked}
                    type="time"
                    name="startTime"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>End Time</Form.Label>
                  <Form.Control
                    disabled={allDayChecked}
                    type="time"
                    name="endTime"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="text-end">
                {addEventLoad ? (
                  <Button className="mt-3" disabled>
                    <Spinner size="sm" animation="border" />
                  </Button>
                ) : (
                  <Button className="mt-3" type="submit">
                    Add Event
                  </Button>
                )}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          {successAddEvent && <h5>Event has been added successfully!</h5>}
        </Col>
      </Row>
      <Row>
        <Col className="text-center m-5">
          <h4>Manage Calendar Events</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup
            className="mb-3 overflow-auto"
            style={{ maxHeight: "1000px" }}
          >
            {calendarItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row className="align-items-center">
                  <Col xs={12} sm={6}>
                    <h5>{item.title}</h5>
                    {item.allDay ? (
                      <h6>Date: {handleDate(item.start)}</h6>
                    ) : (
                      <>
                        <h6>Date: {handleDate(item.start)}</h6>
                        <h6>
                          Start: {handleTime(item.start)} End:{" "}
                          {handleTime(item.end)}
                        </h6>
                      </>
                    )}

                    <b>Description:</b>
                    <p>{item.description}</p>
                  </Col>
                  <Col xs={12} sm={6} className="text-end">
                    <Button onClick={(e) => handleDeleteEvent(e, item.id)}>
                      Delete Event
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageCalendar;
