import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const BaseButton = ({to, ...props}) => to ? (
    <Link component={RouterLink} {...props} to={to}>
        <Button {...props}>
            { props.children }
        </Button>
    </Link>
) : (
    <Button {...props}>
        { props.children }
    </Button>
)

export default BaseButton;