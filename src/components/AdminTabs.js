import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

function AdminTabs() {
  const [tab, setActiveTab] = useState('tuition');
  console.log(tab);

  return (
    <Tabs
      id='controlled-tab'
      activeKey={tab}
      onSelect={(k) => setActiveTab(k)}
      className='mb-3'
    >
      <Tab eventKey='tuition' title='Tuition'>
        {tab}
      </Tab>
      <Tab eventKey='policy' title='Policy'>
        {tab}
      </Tab>
      <Tab eventKey='about' title='About'>
        {tab}
      </Tab>
      <Tab eventKey='faqs' title='FAQs'>
        {tab}
      </Tab>
    </Tabs>
  );
}

export default AdminTabs;
