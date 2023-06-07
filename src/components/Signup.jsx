import React from 'react';
import {
    Button,
    Text,
    Input,
    Spacer
  } from '@nextui-org/react';
import { Link } from 'react-router-dom';

const addUser = () => {
    // fetch call to add new user to database
}

export default function Signup({ setLoggedIn }) {
    const handleClick = () => {
        setLoggedIn(true);
      }
    return (
        <div className="flexbox">
            <Text h2>Welcome to New Heights</Text>
            <Spacer y={1.5} />
            <Input bordered labelPlaceholder="Username" className="input"/>
            <Spacer y={1.5} />
            <Input.Password bordered labelPlaceholder="Password"className="input" />
            <Spacer y={1.5} />
            <Link to="/home">
                <Button color="gradient" onClick={handleClick}>Sign Up</Button>
            </Link>
        </div>
    )
}
