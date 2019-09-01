import React from "react";
import { HelloWorld } from '../components';
import { withAuthorization } from '../Session';

const Home = () => (
    <div>
        <HelloWorld />
        <p>The Home Page is accessible by every signed in user.</p>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);