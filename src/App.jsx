import { Route, Switch } from 'react-router';
import './App.scss';

//pages

import Sidebar from './components/Sidebar/Sidebar';
import Home from "./pages/Home/Home"
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import Discount from './pages/Discount/Discount';
import Notification from './pages/Notification/Notification';
import Massage from './pages/Massage/Massage';


function App() {
return (
<div className="app">
  <Sidebar></Sidebar>
  <Switch>
    <Route path="/dashboard" component={Dashboard}></Route>
    <Route path="/settings" component={Settings}></Route>
    <Route path="/discount" component={Discount}></Route>
    <Route path="/notification" component={Notification}></Route>
    <Route path="/massage" component={Massage}></Route>
    <Route path="/" component={Home}></Route>
  </Switch>
</div>
);
}

export default App;