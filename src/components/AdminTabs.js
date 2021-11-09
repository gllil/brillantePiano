import { Tab, Tabs } from "react-bootstrap";
import ManageCalendar from "./ManageCalendar";
import ManageMainPage from "./ManageMainPage";
import ManageTuition from "./ManageTuition";

function AdminTabs() {
  return (
    <Tabs id="controlled-tab" defaultActiveKey="calendar" className="mb-3">
      <Tab eventKey="calendar" title="Calendar">
        <ManageCalendar />
      </Tab>
      <Tab eventKey="mainPage" title="Main Page">
        <ManageMainPage />
      </Tab>
      <Tab eventKey="tuition" title="Tuition" disabled>
        <ManageTuition />
      </Tab>
      <Tab eventKey="policy" title="Policy" disabled></Tab>
      <Tab eventKey="about" title="About" disabled></Tab>
      <Tab eventKey="faqs" title="FAQs" disabled></Tab>
    </Tabs>
  );
}

export default AdminTabs;
