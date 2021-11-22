import React from "react";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { Card, ListGroup } from "react-bootstrap";

const PageNotFound: React.FC = () => {
  const intl = useIntl();

  // Make a notify service like in angular project for easier toast configs

  const notify = () => {
    toast("Wow so easy!");
  };

  function notify2() {
    toast("Wow so easy!");
  }

  return (
    <div>
      <FormattedMessage id="pageNotFound.message" />
      <span
        style={{ fontSize: "25px", fontFamily: "Inter" }}
        className="PageNotFound-message mx-5"
      >
        {intl.formatMessage({ id: "pageNotFound.message", defaultMessage: "BRUH" })}
      </span>
      <FontAwesomeIcon icon={['fas', 'coffee']} />
      <FontAwesomeIcon icon="coffee" />
      <button onClick={notify}>Notify!</button>

      <Card style={{ width: "18rem" }}>
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default PageNotFound;
