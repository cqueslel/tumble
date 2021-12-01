import "./App.scss";
import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageNotFound from "../common/PageNotFound";
import Home from "../routes/Home/Home";
import { RiotService } from "../../services/riot.service";

import { IntlProvider } from "react-intl";
import en_messages from "../../locales/en.json";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

const App: React.FC = () => {
  library.add(fab, fas, far);

  return (
    <IntlProvider locale="en" messages={en_messages}>
      <HashRouter basename={process.env.REACT_APP_BASE_URL}>
        <div className="App-body">
          <div className="flex-grow-1">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={PageNotFound} />
              {/* <Redirect to="/" /> */}
            </Switch>
          </div>
          <ToastContainer
            autoClose={3000}
            position="bottom-right"
            progressClassName="toastProgress"
            bodyClassName="toastBody"
            closeButton={true}
            pauseOnFocusLoss={false}
            icon={false}
          />
        </div>
      </HashRouter>
    </IntlProvider>
  );
};

export default App;
