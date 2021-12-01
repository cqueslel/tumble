import React from "react";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
  const intl = useIntl();

  // How to scss styling directly in component file
  // ---> Best approach just use a scss file import, common one for all or ---> just use App's one

  // Make dictionnary of classes
  const spanStyles = {
    fontSize: "25px",
    fontFamily: "Inter",
  };

  // Make a notify service like in angular project for easier toast configs, style toast Miami style

  const notify = () => {
    toast("Toastify works!");
  };

  // Use const not function for now

  // function notify2() {
  //   toast("Toastify works!");
  // }

  return (
    <div className="PageNotFound-main">

      <FormattedMessage
        id="pageNotFound.message"
        defaultMessage="defaulted to this"
      />

      <span style={{ fontSize: "25px", fontFamily: "Inter" }} className="mx-5">
        {intl.formatMessage({
          id: "pageNotFound.message",
          defaultMessage: "defaulted to this",
        })}
      </span>

      <span style={spanStyles} className="mx-5">
        {intl.formatMessage({
          id: "pageNotFound.message",
          defaultMessage: "defaulted to this",
        })}
      </span>

      <div className="mx-5 my-5">
        <Link to="/" className="btn btn-dark">
          Go back <FormattedMessage id="header.home" />
        </Link>
      </div>

      <FontAwesomeIcon icon={["fas", "coffee"]} />
      <FontAwesomeIcon icon="coffee" />
      
      <button className="btn btn-primary" onClick={notify}>Notify!</button>

    </div>
  );
};

export default PageNotFound;
