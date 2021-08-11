import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Container, Modal } from "react-bootstrap";
import { firestore } from "../firebase/config";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";

const Calendar = () => {
  const [calendarItems, setCalendarItems] = useState([]);
  const [calendarItem, setCalendarItem] = useState({});
  const [eventModalOpen, setEventModalOpen] = useState(false);

  useEffect(() => {
    const calendarItemsRef = firestore.collection("calendarItems");

    calendarItemsRef.onSnapshot((snap) => {
      let events = [];
      snap.forEach((doc) => {
        events.push({ ...doc.data(), id: doc.id });
      });
      setCalendarItems(events);
    });
  }, []);

  console.log(calendarItems);

  const handleDate = (dateStr) => {
    console.log(dateStr);
    let dateObj = DateTime.fromISO(dateStr);
    let newFormat = dateObj.toLocaleString(DateTime.DATE_FULL);
    return newFormat;
  };
  const handleTime = (dateStr) => {
    let dateObj = DateTime.fromISO(dateStr);
    let newFormat = dateObj.toLocaleString(DateTime.TIME_SIMPLE);
    return newFormat;
  };

  const handleDateClick = (info) => {
    if (info) {
      setCalendarItem({
        title: info.event.title,
        date: handleDate(info.event.startStr),
        start: handleTime(info.event.startStr),
        end: handleTime(info.event.endStr),
        description: info.event._def.extendedProps.description,
      });
      setEventModalOpen(true);
    }
    console.log(info);
  };

  const handleModalClose = () => {
    setEventModalOpen(false);
  };
  return (
    <Container className="mt-3 mb-3 shortPageContainer">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        eventClick={handleDateClick}
        events={calendarItems}
      />
      <Modal show={eventModalOpen} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <h3>{calendarItem.title}</h3>
        </Modal.Header>
        <Modal.Body>
          <h5>{calendarItem.date}</h5>
          <h5>
            {calendarItem.start} - {calendarItem.end}
          </h5>
          <h5>{calendarItem.description}</h5>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Calendar;
