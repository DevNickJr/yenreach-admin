import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import AddJob from './pages/Jobs/add';
import Businesses from './pages/businesses';
// import AddBusiness from './pages/businesses/add';
import AllBusinesses from './pages/businesses/all';
import PendingBusinesses from './pages/businesses/pending';
import IncompleteBusinesses from './pages/businesses/incomplete';
import Business from './pages/businesses/business';
import Admins from './pages/admins';
import AddAdmin from './pages/admins/add';
import AllAdmins from './pages/admins/all';
import Admin from './pages/admins/admin';
import Billboards from './pages/billboards';
// import AddBillboard from './pages/billboards/add';
import AllBillboards from './pages/billboards/all';
import PendingBillboard from './pages/billboards/pending';
import Billboard from './pages/billboards/billboard';
import EditBusiness from './pages/businesses/edit-business';
import Subscriptions from './pages/subscriptions';
import AddSubscription from './pages/subscriptions/add';
import AllSubscription from './pages/subscriptions/all';
import Subscription from './pages/subscriptions/subscription';
// import AllSubscriptionPlans from './pages/subscriptions/subscription-plans';
import AddPlan from './pages/subscriptions/plans/add';
import Blogs from './pages/blogs';
import AddBlog from './pages/blogs/add';
import EditBlog from './pages/blogs/edit';
// import Adverts from './pages/user-ads';
// import AddAdvert from './pages/user-ads/add';
// import AllAdverts from './pages/user-ads/all';
// import Advert from './pages/user-ads/advert';
// import Categories from './pages/categories';
// import AddCategory from './pages/categories/add';
// import Category from './pages/categories/category';
// import AllCategories from './pages/categories/all';
// import AllSubCategories from './pages/categories/subcategories/all';
// import SubCategory from './pages/categories/subcategories/category';
// import AddSubCategory from './pages/categories/subcategories/add';
// import AllCategoriesSub from './pages/categories/categories-sub';
// import SMS from './pages/sms';
// import BulkSMS from './pages/sms/bulk';


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
            {/* <Route path="/businesses/add" element={<AddBusiness />} /> */}
            <Route path="/businesses/all" element={<AllBusinesses />} />
            <Route path="/businesses/incomplete" element={<IncompleteBusinesses />} />
            <Route path="/businesses/pending" element={<PendingBusinesses />} />
            <Route path="/businesses/:id" element={<Business />} />
            <Route path="/businesses/:id/edit" element={<EditBusiness />} />

            {/* admins */}
            <Route path="/admins" element={<Admins />} />
            <Route path="/admins/add" element={<AddAdmin />} />
            <Route path="/admins/all" element={<AllAdmins />} />
            <Route path="/admins/:id" element={<Admin />} />
            
            {/* subscriptions */}
            {/* <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/subscriptions/add" element={<AddSubscription />} />
            <Route path="/subscriptions/all" element={<AllSubscription />} />
            <Route path="/subscriptions/:id" element={<Subscription />} />
            <Route path="/subscriptions/:id/plans" element={<AllSubscriptionPlans />} />
            <Route path="/subscriptions/:id/add-plan" element={<AddPlan />} /> */}
         
                
            {/* billboards */}
            <Route path="/billboards" element={<Billboards />} />
            {/* <Route path="/billboards/add" element={<AddBillboard />} /> */}
            <Route path="/billboards/all" element={<AllBillboards />} />
            <Route path="/billboards/pending" element={<PendingBillboard />} />
            <Route path="/billboards/:id" element={<Billboard />} />
         
            {/* adverts */}
            {/* <Route path="/adverts" element={<Adverts />} />
            <Route path="/adverts/add" element={<AddAdvert />} />
            <Route path="/adverts/all" element={<AllAdverts />} />
            <Route path="/adverts/:id" element={<Advert />} /> */}

            {/* categories */}
            {/* <Route path="/categories" element={<Categories />} />
            <Route path="/categories/add" element={<AddCategory />} />
            <Route path="/categories/all" element={<AllCategories />} />
            <Route path="/categories/:id" element={<Category />} />

            <Route path="/categories/:id/subcategories" element={<AllCategoriesSub />} />
         
            <Route path="/categories/subcategories/all" element={<AllSubCategories />} />
            <Route path="/categories/subcategories/:id" element={<SubCategory />} />
            <Route path="/categories/:id/add-subcategory" element={<AddSubCategory />} /> */}


            {/* blogs */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/add" element={<AddBlog />} />
            <Route path="/blogs/:id/edit" element={<EditBlog />} />

            
            {/* SMS */}
            {/* <Route path="/sms" element={<SMS />} />
            <Route path="/sms/bulk" element={<BulkSMS />} />
            <Route path="/sms/:id" element={<SMS />} /> */}

          </Routes>
        </ScrollToTop>
    </Router>
  )
}

export default App
