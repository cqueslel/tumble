import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import PageNotFound from '../common/PageNotFound';
import Header from '../common/Header';
import Home from '../routes/Home/Home'

const App: React.FC = () => {

  const notify = () => toast("Wow so easy!");

  function notify2() {
    toast("Wow so easy!");
  }

  return (
    <Router basename={process.env.REACT_APP_BASE_URL}>
      <Header />
      <div className="flex-grow-1">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </Router>
  );
}

export default App;
