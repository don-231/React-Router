import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { People } from './Pages/People';
import { Person } from './Pages/Person';
import { Starships } from './Pages/Starships';
import { Starship } from './Pages/Starship';
import { Planets } from './Pages/Planets';
import { Planet } from './Pages/Planet';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/people" element={<People />}/>
      <Route path="/people/:id" element={<Person />}/> 

      <Route path='/starships' element={<Starships/>}/>  
      <Route path='/starships/:id' element={<Starship/>}/>

      <Route path='/planets' element={<Planets/>}/>
      <Route path='/planets/:id' element={<Planet/>}/>
    </Routes>
  );
}

export default App;
