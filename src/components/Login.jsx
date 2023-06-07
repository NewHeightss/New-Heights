import React from 'react';
import {
    Button,
    Text,
    Input,
    Spacer
  } from '@nextui-org/react';

const checkUser = async () => {
    try {
        const response = await fetch('/api/login');
        const jsonData = await response.json();
    } catch(error) {
        console.log('error: ', error);
    }
}

export default function Login({ setLoggedIn }) {
  const handleClick = () => {
    setLoggedIn(true);
  }
  return (
    <div className="flexbox">
        <Text h2>Welcome to New Heights</Text>
        <Spacer y={1.5} />
        <Input bordered labelPlaceholder="Username" className="input"/>
        <Spacer y={1.5} />
        <Input.Password bordered labelPlaceholder="Password" className="input"/>
        <Spacer y={1.5} />
        <Link to="/home">
          <Button color="gradient" onClick={handleClick}>Submit</Button>
        </Link>
    </div>
  )
}

