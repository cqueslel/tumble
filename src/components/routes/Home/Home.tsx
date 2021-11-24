import './Home.scss';
import React from 'react';
import { FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";

const Home: React.FC = () => {

    const [loading, setLoading] = useState(true);

    return (
        <div>
            <h3>
                <FormattedMessage id="home.title" />
            </h3>
        </div>
    );
}

export default Home;