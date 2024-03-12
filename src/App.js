import Nav from './components/Nav.jsx';
import Home from './screens/Home.jsx';
import Characters from './screens/Characters.jsx';
import Quotes from './screens/Quotes.jsx';
import Seasons from './screens/Seasons.jsx';
import SeasonDetail from './screens/SeasonDetail.jsx';
import CharacterDetail from './screens/CharacterDetail.jsx';
import QuoteDetail from './screens/QuoteDetail.jsx';
import CharacterCreate from './screens/CharacterCreate.jsx';
import CharacterEdit from './screens/CharacterEdit.jsx';
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path='/quotes' element={<Quotes />} />
        <Route path='/seasons' element={<Seasons />} />
        <Route path='/seasons/:id' element={<SeasonDetail />} />
        <Route path='/quotes/:id' element={<QuoteDetail />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/add-character" element={<CharacterCreate />} />
        <Route path="/characters/:id/edit" element={<CharacterEdit />} />

      </Routes>
    </div>
  );
}

export default App;
