import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
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

  // conditionally render page depending on if user is logged in
  let components;
  if (loggedIn) {
    components = 
    <div>
      <h1>This is App</h1>
      <AddApplication/>
      <MainComponent columns={columns} rows={rows} />
    </div>
  }
  else {
    components = <Home/>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={components}></Route>
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>}></Route>
        <Route path='/signup' element={<Signup setLoggedIn={setLoggedIn}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
