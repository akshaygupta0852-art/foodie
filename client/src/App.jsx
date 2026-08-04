import { lazy, Suspense, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart';
import Navbar from './components/common/Navbar';
import Mainlayout from './layouts/Mainlayout';
import Footer from './components/common/Footer';
import Loader from './components/common/Loader';
const Home = lazy(() => import("./pages/Home"));
const Restaurants = lazy(() => import("./pages/Restaurants"));
const Portal = lazy(() => import("./pages/Portal"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Categories = lazy(() => import('./pages/Categories'));
const Guest = lazy(() => import('./layouts/Guest'));
const ProtectedRoute = lazy(() => import('./routes/ProtectedRoute'));
const ViewRest = lazy(() => import('./components/restaurants/ViewRest'))
const AddressPage = lazy(() => import('./pages/Address'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Order = lazy(() => import('./pages/Order'));
const OrderSuccess = lazy(() => import('./pages/Successful'));
const OrderFailed = lazy(() => import('./pages/OrderFailed'));

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className='m-0 p-0'>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/restaurants' element={<Restaurants />} />
            <Route path='/categories' element={<Categories />} />
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

        </Routes>
      </Suspense>
    </div>
  )
}

export default App