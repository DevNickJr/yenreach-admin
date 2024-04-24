import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import AddJob from './pages/Jobs/add';
import Businesses from './pages/businesses';
import AddBusiness from './pages/businesses/add';
import Blogs from './pages/blogs';
import AddBlog from './pages/businesses/add';
import AllBusinesses from './pages/businesses/all';
import PendingBusinesses from './pages/businesses/pending';
import Business from './pages/businesses/business';
import Admins from './pages/admins';
import AddAdmin from './pages/admins/add';
import AllAdmins from './pages/admins/all';
import Admin from './pages/admins/admin';


function App() { 

  return (
    <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />

            {/* jobs */}
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/add" element={<AddJob />} />
     
            {/* businesses */}
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/businesses/add" element={<AddBusiness />} />
            <Route path="/businesses/all" element={<AllBusinesses />} />
            <Route path="/businesses/pending" element={<PendingBusinesses />} />
            <Route path="/businesses/:id" element={<Business />} />
         
            {/* admins */}
            <Route path="/admins" element={<Admins />} />
            <Route path="/admins/add" element={<AddAdmin />} />
            <Route path="/admins/all" element={<AllAdmins />} />
            <Route path="/admins/:id" element={<Admin />} />
         
            {/* blogs */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/add" element={<AddBlog />} />

          </Routes>
        </ScrollToTop>
    </Router>
  )
}

export default App
