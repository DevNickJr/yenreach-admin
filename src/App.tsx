import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import AddJob from './pages/Jobs/add';
import Businesses from './pages/businesses';
import AddBusiness from './pages/businesses/add';
import Blogs from './pages/blogs';
import AddBlog from './pages/blogs/add';
import AllBusinesses from './pages/businesses/all';
import PendingBusinesses from './pages/businesses/pending';
import Business from './pages/businesses/business';
import Admins from './pages/admins';
import AddAdmin from './pages/admins/add';
import AllAdmins from './pages/admins/all';
import Admin from './pages/admins/admin';
import Adverts from './pages/adverts';
import AddAdvert from './pages/adverts/add';
import AllAdverts from './pages/adverts/all';
import Advert from './pages/adverts/advert';
import Billboards from './pages/billboards';
import AddBillboard from './pages/billboards/add';
import AllBillboards from './pages/billboards/all';
import PendingBillboard from './pages/billboards/pending';
import Billboard from './pages/billboards/billboard';
import EditBusiness from './pages/businesses/edit-business';
import Categories from './pages/categories';
import AddCategory from './pages/categories/add';
import Category from './pages/categories/category';
import AllCategories from './pages/categories/all';
import AllSubCategories from './pages/categories/subcategories/all';
import SubCategory from './pages/categories/subcategories/category';
import AddSubCategory from './pages/categories/subcategories/add';
import AllCategoriesSub from './pages/categories/categories-sub';


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
            <Route path="/businesses/:id/edit" element={<EditBusiness />} />
       
            {/* billboards */}
            <Route path="/billboards" element={<Billboards />} />
            <Route path="/billboards/add" element={<AddBillboard />} />
            <Route path="/billboards/all" element={<AllBillboards />} />
            <Route path="/billboards/pending" element={<PendingBillboard />} />
            <Route path="/billboards/:id" element={<Billboard />} />
         
            {/* admins */}
            <Route path="/admins" element={<Admins />} />
            <Route path="/admins/add" element={<AddAdmin />} />
            <Route path="/admins/all" element={<AllAdmins />} />
            <Route path="/admins/:id" element={<Admin />} />
         
            {/* adverts */}
            <Route path="/adverts" element={<Adverts />} />
            <Route path="/adverts/add" element={<AddAdvert />} />
            <Route path="/adverts/all" element={<AllAdverts />} />
            <Route path="/adverts/:id" element={<Advert />} />
         
            {/* categories */}
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/add" element={<AddCategory />} />
            <Route path="/categories/all" element={<AllCategories />} />
            <Route path="/categories/:id" element={<Category />} />

            <Route path="/categories/:id/subcategories" element={<AllCategoriesSub />} />
         
            <Route path="/categories/subcategories/all" element={<AllSubCategories />} />
            <Route path="/categories/subcategories/:id" element={<SubCategory />} />
            <Route path="/categories/:id/add-subcategory" element={<AddSubCategory />} />


            {/* blogs */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/add" element={<AddBlog />} />

          </Routes>
        </ScrollToTop>
    </Router>
  )
}

export default App
