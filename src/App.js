import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import { useSelector } from 'react-redux'
import { ErrorMessage } from './components/ErrorMessage'

function App() {

  const {userAuth,error} = useSelector((state) => state.authReducer)
  const routes = useRoutes(userAuth.isAuthenticated)        

  return (
    <Router>        
        <Navigation/>   
        <ErrorMessage error={error}/>
        {routes}          
    </Router>
  );
}

export default App;
