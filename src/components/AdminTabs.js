import { useState } from 'react';
import { Button, Tab, Tabs } from 'react-bootstrap';

function AdminTabs() {
  const [tab, setActiveTab] = useState('tuition');

  const handleClick = (e) => {
    console.log(`Send to api/${tab}`);
  };

  return (
    <Tabs
      id='controlled-tab'
      activeKey={tab}
      onSelect={(k) => setActiveTab(k)}
      className='mb-3'
    >
      <Tab eventKey='tuition' title='Tuition'>
        <Button onClick={handleClick}>Send to {tab} API</Button>
      </Tab>
      <Tab eventKey='policy' title='Policy'>
        <Button onClick={handleClick}>Send to {tab} API</Button>
      </Tab>
      <Tab eventKey='about' title='About'>
        <Button onClick={handleClick}>Send to {tab} API</Button>
      </Tab>
      <Tab eventKey='faqs' title='FAQs'>
        <Button onClick={handleClick}>Send to {tab} API</Button>
      </Tab>
    </Tabs>
  );
}

export default AdminTabs;
