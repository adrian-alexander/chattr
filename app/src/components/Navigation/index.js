import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => {
    <div>
        <ul>
            <Link to={ROUTES.LOGIN}>Login </Link>
        </ul>
    </div>
}