import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import { UserRegistration, UserLogin} from './components/User.jsx';
import MainPage from './pages/MainPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/register" element={<UserRegistration/>} />
        <Route exact path="/login" element={<UserLogin/>} />
    </Routes>
    </Router>
  );
}

export default App;

