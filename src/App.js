import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import List from './components/List';

function App() {
  return (
    <div className="bg-slate-900 w-screen h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-creators" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
