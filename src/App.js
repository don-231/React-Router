import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { People } from './Pages/People';
import { Person } from './Pages/Person';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />}/>
      <Route path="/people/:id" element={<Person />}/>      
    </Routes>
  );
}

export default App;
