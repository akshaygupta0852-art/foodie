import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
const Home = lazy(() => import("./pages/Home"));
const Restaurants = lazy(() => import("./pages/Restaurants"));
const Portal = lazy(() => import("./pages/Portal"));
const Cart = lazy(() => import("./pages/Cart"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Loader from './components/common/Loader';

const App = () => {
  return (
    <div className='m-0 p-0'>
      {/* <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/restaurants' element={<Restaurants />} />
          <Route path='/loginpage' element={<Portal />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/userprofile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer /> */}
      <Portal />
    </div>
  )
}

export default App