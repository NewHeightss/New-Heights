import React from 'react';
import {
    Button,
    Text,
    Input,
    Spacer
  } from '@nextui-org/react';

const addUser = () => {
    // fetch call to add new user to database
}

export default function Signup() {
    return (
        <div className="flexbox">
            <Text h2>Welcome to New Heights</Text>
            <Spacer y={1.5} />
            <Input bordered labelPlaceholder="Username" />
            <Spacer y={1.5} />
            <Input.Password bordered labelPlaceholder="Password" />
            <Spacer y={1.5} />
            <Button color="gradient">Sign Up</Button>
        </div>
    )
}
