import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [calendarItems, setCalendarItems] = useState([]);
  const [tuitionItems, setTuitionItems] = useState([]);

  useEffect(() => {
    const collectionRef = firestore.collection(collection);
    if (collection === "calendarItems") {
      collectionRef.orderBy("start", "asc").onSnapshot((snap) => {
        let events = [];
        snap.forEach((doc) => {
          events.push({ ...doc.data(), id: doc.id });
        });
        setCalendarItems(events);
      });
    }
    if (collection === "tuition") {
      collectionRef.onSnapshot((snap) => {
        let items = [];
        snap.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setTuitionItems(items);
      });
    }
  }, [collection]);
  return { calendarItems, tuitionItems };
};

export default useFirestore;
