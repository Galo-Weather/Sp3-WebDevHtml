import Header from './components/Header';
import MainPage from './components/MainPage';
import Problema from './components/Problema';
import Causa from './components/Causa';
import Solucao from './components/Solucao';
import AboutUs from './components/AboutUs';
import Contato from './components/Contato';

function App() {
  return (
    <div className="App">
      <Header/>
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
