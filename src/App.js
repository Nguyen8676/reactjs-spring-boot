import logo from './logo.svg';
import './App.css';
import './components/ListEmployeeComponent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import DetailsEmployeeComponent from'./components/DetailsEmployeeComponent';
import LoginComponent from './components/LoginComponent';
function App() {
  return (
    <div> 
      <Router>
        <div className="container">
          <HeaderComponent></HeaderComponent>
            <div className="container">
              <Switch>
                {/* <Route path="/login" component={LoginComponent}></Route> */}
                <Route path="/" exact component={ListEmployeeComponent}></Route>
                <Route path="/create-Employee" component={CreateEmployeeComponent}></Route>
                <Route path="/detail-employee/:id" component={DetailsEmployeeComponent}></Route>
              </Switch>
            </div>
          <FooterComponent></FooterComponent>
        </div>
      </Router>
    </div>
    
  );
}

export default App;
