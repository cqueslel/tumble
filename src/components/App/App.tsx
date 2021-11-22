import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageNotFound from "../common/PageNotFound";
import Header from "../common/Header";
import Home from "../routes/Home/Home";
import { RiotService } from "../../services/riot.service";

import { IntlProvider } from "react-intl";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

const App: React.FC = () => {

  library.add(fab, fas, far);

  return (
    <IntlProvider locale="en">
      <Router basename={process.env.REACT_APP_BASE_URL}>
        <Header />
        <div className="flex-grow-1">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <ToastContainer />
      </Router>
    </IntlProvider>
  );
};

export default App;
