import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import AddJob from './pages/Jobs/add';


function App() { 

  return (
    <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/add" element={<AddJob />} />
          </Routes>
        </ScrollToTop>
    </Router>
  )
}

export default App
