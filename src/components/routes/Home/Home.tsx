import './Home.scss';
import { FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";

const Header: React.FC = () => {

    const [loading, setLoading] = useState(true);

    return (
        <div>
            <h3 className="title">
                <FormattedMessage id="home.title" />
            </h3>
        </div>
    );
}

export default Header;