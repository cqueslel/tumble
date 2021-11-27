import './Home.scss';
import React from 'react';
import { FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";

const Home: React.FC = () => {

    const [loading, setLoading] = useState(true);

    // Make use effect example that toasts

    return (
        <div style={{justifyContent: 'center'}}>
            <h3 style={{textAlign: 'center', justifyContent: 'center'}}>
                <FormattedMessage id="home.title" />
            </h3>
            <h3 style={{textAlign: 'center', justifyContent: 'center', marginTop: '100px'}}>
                DONT DROP THE SOAP
            </h3>
        </div>
    );
}

export default Home;