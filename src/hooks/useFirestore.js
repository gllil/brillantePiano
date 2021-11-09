import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [calendarItems, setCalendarItems] = useState([]);
  const [tuitionItems, setTuitionItems] = useState([]);
  const [mainPageContent, setMainPageContent] = useState({});

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
    if (collection === "mainPage") {
      collectionRef.doc("details").onSnapshot((doc) => {
        setMainPageContent(doc.data());
      });
    }
  }, [collection]);
  return { calendarItems, tuitionItems, mainPageContent };
};

export default useFirestore;
