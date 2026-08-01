import { lazy, Suspense, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
const Home = lazy(() => import("./pages/Home"));
const Restaurants = lazy(() => import("./pages/Restaurants"));
const Portal = lazy(() => import("./pages/Portal"));
import Cart from './pages/Cart';
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Categories = lazy(() => import('./pages/Categories'));
const Guest = lazy(() => import('./layouts/Guest'));
const ProtectedRoute = lazy(() => import('./routes/ProtectedRoute'));
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Loader from './components/common/Loader';
import Mainlayout from './layouts/Mainlayout';
import ViewRest from './components/restaurants/ViewRest';
const Order = lazy(() => import('./pages/Order'))

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className='m-0 p-0'>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/restaurants' element={<Restaurants />} />
            <Route element={<ProtectedRoute />} >
              <Route path='/cart' element={<Cart changeCount={setItemCount} />} />
              <Route path='/userprofile' element={<Profile />} />
              <Route path='/orders/:id' element={<Order />} />
            </Route>
            <Route path='/categories' element={<Categories />} />
          </Route>
          <Route element={<Guest />}>
            <Route path='/portal' element={<Portal />} />
          </Route>
          <Route path='/restaurants/:id' element={<ViewRest />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App