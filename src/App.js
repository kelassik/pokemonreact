import MainMenu from './container/Menu/mainMenu';
import PopupCard from './container/Pokedex/PopUpCard/popupCard';
import Pokedex from './container/Pokedex/pokedex';
import Container from './testing/container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './container/Home/index';
import Legendaries from './container/Legendaries/legendaries';
import Documentation from './container/Documentation/documentation';

function App() {
  return (
    // <Pokedex/>
    <Router>
      <Routes>
        <Route exact path="" Component={Home}/>
        <Route path="/src/container/Pokedex/pokedex.jsx" Component={Pokedex}/>
        <Route path="/src/container/Legendaries/legendaries.jsx" Component={Legendaries}/>
        <Route path="/src/container/Documentation/documentation.jsx" Component={Documentation}/>
      </Routes>
    </Router>
  );
}

export default App;
