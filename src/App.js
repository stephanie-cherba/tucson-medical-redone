import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home, RequestAppointment, News, Tools, AboutUs, Help, Header} from './Components/index'

function App() {
  return (
    <>
      <Header />
      <Router >
        <Switch >
          <Route exact path ='/' component={Home} />
          <Route path ='/RequestAppointment' component={RequestAppointment} />
          <Route path ='/News' component={News} />
          <Route path ='/Tools' component={Tools} />
          <Route path ='/AboutUs' component={AboutUs} />
          <Route path ='/Help' component={Help} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
