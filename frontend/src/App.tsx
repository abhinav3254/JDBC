import Auth from "./components/Auth";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App