import React from 'react';
import { useState } from 'react';
// import { NextUIProvider } from '@nextui-org/react';
import MainComponent from './components/mainContainer/MainComponent.jsx';
import AddApplication from './components/mainContainer/AddApplication.jsx';
export default function App() {
  const columns = [
    {
      key: 'company_name',
      label: 'Company Name',
    },
    {
      key: 'date_applied',
      label: 'Date Applied',
    },
    {
      key: 'position_name',
      label: 'Position',
    },
    {
      key: 'city_name',
      label: 'City',
    },
    {
      key: 'notes_txt',
      label: 'Notes',
    },
    {
      key: 'status',
      label: 'Status',
    },
    {
      key: 'application_type',
      label: 'Application Type',
    },
    {
      key: 'listing_link',
      label: 'Link To Listing',
    },
    {
      key: 'action',
      label: '',
    },
  ];

  const [rows, setRows] = useState([])
  
  return (
    <div>
      <h1>This is App</h1>
      <AddApplication/>
      <MainComponent columns={columns} rows={rows} />
    </div>
  );
}
