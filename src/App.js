import './App.css';
import PlanLayout from './Pages/Layouts/PlanLayout';
import Welcome from './Pages/Welcome';
import {BrowserRouter, Route} from "react-router-dom";
import PhoneConformation from './Pages/PhoneConformation';
import CodeConfirm from './Pages/CodeConfirm';
import Allow_notification from './Pages/Allow_notification'

function App() {
  return (
   
    <BrowserRouter>
    <PlanLayout>
      <Route exact path='/' component={Welcome}></Route>
      <Route exact path='/invite' component={PhoneConformation}></Route>
      <Route exact path='/code_confirm' component={CodeConfirm}></Route>
      <Route exact path='/allow_notification' component={Allow_notification}></Route>

    </PlanLayout>
    
    </BrowserRouter>

  );
}

export default App;
