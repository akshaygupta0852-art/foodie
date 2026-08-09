import { lazy, Suspense, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart';
import Navbar from './components/common/Navbar';
import Mainlayout from './layouts/Mainlayout';
import Footer from './components/common/Footer';
import Loader from './components/common/Loader';
import Dashboard from './admin/pages/Dashboard';
import AdminProtectedRoute from './routes/AdminProtectedRoute';
import ManageShops from './admin/pages/ManageShop';
import Addfood from './admin/pages/Addfood';
import Orders from './admin/pages/Orders';
const Home = lazy(() => import("./pages/Home"));
const Restaurants = lazy(() => import("./pages/Restaurants"));
const Portal = lazy(() => import("./pages/Portal"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Guest = lazy(() => import('./layouts/Guest'));
const ProtectedRoute = lazy(() => import('./routes/ProtectedRoute'));
const ViewRest = lazy(() => import('./components/restaurants/ViewRest'))
const AddressPage = lazy(() => import('./pages/Address'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Order = lazy(() => import('./pages/Order'));
const OrderSuccess = lazy(() => import('./pages/Successful'));
const OrderFailed = lazy(() => import('./pages/OrderFailed'));
const AdminLogin = lazy(() => import('./admin/pages/AdminLogin'));
const AddShop = lazy(() => import('./admin/pages/Addshop'));
const ManageFoods = lazy(() => import('./admin/pages/Foods'));
const App = () => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className='m-0 p-0'>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/restaurants' element={<Restaurants />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/cart' element={<Cart changeCount={setItemCount} />} />
          </Route>
          <Route element={<ProtectedRoute />} >
            <Route path='/orders' element={<Order />} />
          </Route>
          <Route element={<Guest />}>
            <Route path='/portal' element={<Portal />} />
          </Route>
          <Route path='/user/address' element={<AddressPage />} />
          <Route path='/restaurants/:id' element={<ViewRest />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/cart/checkout' element={<Checkout />} />
          <Route path='/order/placed/:orderId' element={<OrderSuccess />} />
          <Route path='/order/failed' element={<OrderFailed />} />
          <Route path='/userprofile' element={<Profile />} />
          <Route path='/admin/portal' element={<AdminLogin />} />
          <Route element={<AdminProtectedRoute />}>
            <Route path='/admin/dashboard' element={<Dashboard />} />
          </Route>
          <Route element={<AdminProtectedRoute />}>
            <Route path='/admin/restaurants/add' element={<AddShop />} />
          </Route>
          <Route element={<AdminProtectedRoute />}>
            <Route path='/admin/restaurants' element={<ManageShops />} />
          </Route>
          <Route element={<AdminProtectedRoute />}>
            <Route path='/admin/foods/add' element={<Addfood />} />
          </Route>
          <Route element={<AdminProtectedRoute />}>
            <Route path='/admin/foods' element={<ManageFoods />} />
          </Route>
          <Route element={<AdminProtectedRoute />}>
            <Route path='/admin/orders' element={<Orders />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App