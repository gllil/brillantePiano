import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [calendarItems, setCalendarItems] = useState([]);
  const [tuitionItems, setTuitionItems] = useState([]);
  const [mainPageContent, setMainPageContent] = useState({});
  const [policyPageItems, setPolicyPageItems] = useState([]);
  const [policyPageDetails, setPolicyPageDetails] = useState({});

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
    if (collection === "policyPage") {
      collectionRef
        .doc("policies")
        .collection("policyItems")
        .orderBy("orderNum")
        .onSnapshot((snap) => {
          let policies = [];
          snap.forEach((doc) => {
            policies.push({ ...doc.data(), id: doc.id });
          });

          setPolicyPageItems(policies);
        });

      collectionRef.doc("policyPageDetails").onSnapshot((doc) => {
        setPolicyPageDetails(doc.data());
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
  return {
    calendarItems,
    tuitionItems,
    mainPageContent,
    policyPageItems,
    policyPageDetails,
  };
};

export default useFirestore;
