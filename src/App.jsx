import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { NextUIProvider } from '@nextui-org/react';
import MainComponent from './components/mainContainer/MainComponent.jsx';
import AddApplication from './components/mainContainer/AddApplication.jsx';
import './components/styles.css';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [rows, setRows] = useState([])

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



  const components =
  <div>
    <h1>This is App</h1>
    <AddApplication columns={columns} rows={rows} setRows={setRows} companyName={companyName} setCompanyName={setCompanyName} dateApplied={dateApplied} setDateApplied={setDateApplied} 
    cityName={cityName} setCityName={setCityName} positionName={positionName} setPositionName={setPositionName} status={status} setStatus={setStatus} notesTxt={notesTxt} setNotesTxt={setNotesTxt} listingLink={listingLink} setListingLink={setListingLink} />
    <MainComponent columns={columns} rows={rows} setRows={setRows}/>
</div>

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>}></Route>
        <Route path='/signup' element={<Signup setLoggedIn={setLoggedIn}/>}></Route>
        <Route path='/home' element={components}></Route>
      </Routes>
    </BrowserRouter>
  );
}
