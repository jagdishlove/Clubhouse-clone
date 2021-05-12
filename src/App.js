import './App.css';
import PlanLayout from './Pages/Layouts/PlanLayout';
import Welcome from './Pages/Welcome';
import {BrowserRouter, Route} from "react-router-dom";
import PhoneConformation from './Pages/PhoneConformation';

function App() {
  return (
   
    <BrowserRouter>
    <PlanLayout>
      <Route exact path='/' component={Welcome}></Route>
      <Route exact path='/invite' component={PhoneConformation}></Route>
   
    </PlanLayout>
    
    </BrowserRouter>

  );
}

export default App;
