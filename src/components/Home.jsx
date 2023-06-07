import React from 'react';
import { Button, Text } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flexbox">
        <Text
        h1
        size={60}
        css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
        >
        Let's reach new heights...
        </Text>
        <div className="button-container">
            <Link to="/signup">
                <Button color="gradient" className="btn" auto ghost>Signup</Button>
            </Link>
            <Link to="/login">
                <Button color="gradient" className="btn" auto ghost>Login</Button>
            </Link>
        </div>
  </div>
  )
}
