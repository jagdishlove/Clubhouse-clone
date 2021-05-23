import './App.css';
import PlanLayout from './Pages/Layouts/PlanLayout';
import Home from './Pages/Home'
import Welcome from './Pages/Welcome';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PhoneConformation from './Pages/PhoneConformation';
import CodeConfirm from './Pages/CodeConfirm';
import Allow_notification from './Pages/Allow_notification'

function App() {
  return (
   
    <BrowserRouter>
    <Route exact path={[
      '/',
      '/invite',
      '/get_username',
      '/code_confirm',
      '/allow_notification',

    ]}>
    <PlanLayout>
    <Switch>
      <Route exact path='/' component={Welcome}></Route>
      <Route exact path='/invite' component={PhoneConformation}></Route>
      <Route exact path='/code_confirm' component={CodeConfirm}></Route>
      <Route exact path='/allow_notification' component={Allow_notification}></Route>
      </Switch>
    </PlanLayout>
    </Route>
    <Route exact path={['/home']}>
      <Switch>
        <Route eaxct path='/home' component={()=><Home/>}></Route>
      </Switch>

    </Route>
    
    </BrowserRouter>

  );
}

export default App;
