import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

const PageNotFound: React.FC = () => {

    const intl = useIntl();

    return (
        <div>
            <FormattedMessage id="pageNotFound.message" />
            <span style={{ fontSize: '14px', fontFamily: 'Inter' }} className="PageNotFound-message my-5">
                {intl.formatMessage({ id: 'pageNotFound.message' })}
            </span>
        </div>
    );
}

export default PageNotFound;