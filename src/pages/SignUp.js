import React from 'react';
import styled from 'styled-components';
import { FirebaseSignUpForm } from '../components';
import Paper from '@material-ui/core/Paper';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 64px);
`;

const StyledPaper = styled(Paper)`
    padding: 1rem;
    width: 400px;
`;

export default () => (
    <StyledDiv>
        <StyledPaper>
            <h1>Sign up</h1>
            <FirebaseSignUpForm />
        </StyledPaper>
    </StyledDiv>
);