import Header from './components/Header';
import MainPage from './components/MainPage';
import Problema from './components/Problema';
import Causa from './components/Causa';
import Solucao from './components/Solucao';
import AboutUs from './components/AboutUs';
import Contato from './components/Contato';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header>
        <Router>
          <Routes>
            <Route exact path="/" component={MainPage} />
            <Route path="/login" component={Login} />
          </Routes>
        </Router>
        </Header>
        <MainPage/>
        <Problema/>
        <Causa/>
        <Solucao/>
        {/* <AboutUs/> */}
        <Contato/>
    </div>
  );
}
export default App;
