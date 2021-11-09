import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Container, Modal } from "react-bootstrap";
import { useState } from "react";
import { DateTime } from "luxon";
import useFirestore from "../hooks/useFirestore";

const Calendar = () => {
  const { calendarItems } = useFirestore("calendarItems");
  const [calendarItem, setCalendarItem] = useState({});
  const [eventModalOpen, setEventModalOpen] = useState(false);

  console.log(calendarItems);

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

  const handleDateClick = (info) => {
    if (info) {
      if (info.event.allDay) {
        setCalendarItem({
          title: info.event.title,
          date: handleDate(info.event.startStr),
          description: info.event._def.extendedProps.description,
          allDay: info.event.allDay,
        });
      } else {
        setCalendarItem({
          title: info.event.title,
          date: handleDate(info.event.startStr),
          start: handleTime(info.event.startStr),
          end: handleTime(info.event.endStr),
          description: info.event._def.extendedProps.description,
        });
      }

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
          {calendarItem.allDay ? (
            <h5>{calendarItem.date}</h5>
          ) : (
            <>
              <h5>{calendarItem.date}</h5>
              <h5>
                {calendarItem.start} - {calendarItem.end}
              </h5>
            </>
          )}

          <h5>
            {calendarItem.description &&
              calendarItem.description.split("\n").map((paragraph, i) => (
                <span key={i}>
                  {paragraph}
                  <br />
                </span>
              ))}
          </h5>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Calendar;
