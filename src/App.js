import './App.css';
import Header from '../src/components/common/Header/Header';
import Main from '../src/Pages/Main/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Pages/Create/Create';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
