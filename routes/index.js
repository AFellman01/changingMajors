import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Router, hashHistory as history } from 'react-router';
import { Link } from 'react-router';
// Your routes.js file
import routes from './routes/index.js';
/**
 * Import all page components here
 */
import App from './components/App';
import MainPage from './components/MainPage';
import ViewSubmitPage from './components/ViewSubmitPage';
import ViewAllScholarships from './components/ViewAllScholarships';
import UserProfile from './components/UserProfile';
import Chat from './components/Chat';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="/view_submit" component={ViewSubmitPage} />
    <Route path="/view_all_scholarships" component={ViewAllScholarshipsPage} />
    <Route path="/user_profile" component={UserProfile} />
    <Route path="/chat_resources" component={ChatResources} />
  </Route>
);

ReactDOM.render() {
  return (
  	<Router>
    <div>
      <header>
       Changing Majors
      </header>
 	<Link to="/some/where"> Click Me</Link>
    </div>
    </Router>
  );
}

<Router routes={routes} history={history} />,
  document.getElementById('your-app')
);