import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [calendarItems, setCalendarItems] = useState([]);

  useEffect(() => {
    const calendarItemsRef = firestore.collection(collection);

    calendarItemsRef.orderBy("start", "asc").onSnapshot((snap) => {
      let events = [];
      snap.forEach((doc) => {
        events.push({ ...doc.data(), id: doc.id });
      });
      setCalendarItems(events);
    });
  }, [collection]);
  return { calendarItems };
};

export default useFirestore;
