import React from 'react';
import { useState, useRef } from 'react';
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
  const [companyName, setCompanyName] = useState('');
  const [dateApplied, setDateApplied] = useState('');
  const [cityName, setCityName] = useState('');
  const [positionName, setPositionName] = useState('');
  const [status, setStatus] = useState('');
  const [notesTxt, setNotesTxt] = useState('');
  const [listingLink, setListingLink] = useState('')

  return (
    <div>
      <h1>This is App</h1>
      <AddApplication columns={columns} rows={rows} setRows={setRows} companyName={companyName} setCompanyName={setCompanyName} dateApplied={dateApplied} setDateApplied={setDateApplied} 
      cityName={cityName} setCityName={setCityName} positionName={positionName} setPositionName={setPositionName} status={status} setStatus={setStatus} notesTxt={notesTxt} setNotesTxt={setNotesTxt} listingLink={listingLink} setListingLink={setListingLink} />
      <MainComponent columns={columns} rows={rows} setRows={setRows}/>
    </div>
  );
}
