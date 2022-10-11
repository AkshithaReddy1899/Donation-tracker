import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import List from './components/List';
import Donations from './components/Donations';

function App() {
  return (
    <div className="bg-slate-900 text-slate-100 w-screen h-screen overflow-x-hidden">
      <Nav />
      <Routes>
        <Route path="/all-creators" element={<Home />} />
        <Route path="/" element={<List />} />
        <Route path="/my-donations" element={<Donations />} />
      </Routes>
    </div>
  );
}

export default App;
