import { User, UserPlus } from 'lucide-react'
import { lazy, Suspense, useRef, useState } from 'react'
import Loader from '../components/Loader';
const Login = lazy(() => import('../components/portal/Login.jsx'));
const Signup = lazy(() => import('../components/portal/Signup.jsx'));

const Portal = () => {
  const [action, setAction] = useState('login');
  const [focus, setFocus] = useState(false);
  return (
    <div className='h-screen w-screen bg-[url("./src/assets/images/loginBG.png")] bg-center bg-cover bg-no-repeat max-lg:bg-[url("./src/assets/images/mobloginBG.png")] max-lg:bg-cover
    flex justify-center items-center'>
      <div className='h-3/4 w-1/3 form-container max-lg:w-9/10 max-lg:h-3/4 flex flex-col items-center'>
        <img className='h-30 max-lg:h-20' src='./src/assets/images/logo.png' />
        <div className='flex'>
          <button onClick={function (e){
            setAction('login');
            setFocus(false)
          }} type='button' className={`${!focus ? 'focusBtn' : ''} px-(--space-3xl) rounded-md flex items-center gap-3 py-(--space-sm) font-semibold cursor-pointer outline-0 border-0 max-lg:px-(--space-md) max-lg:py-(--space-xs) max-lg:text-sm`} ><User fill='white' /> Login</button>
          <button onClick={() => {
            setAction('signup');
            setFocus(true)
          }} type='button' className={`${focus ? 'focusBtn' : ''} flex items-center gap-3 px-(--space-3xl) rounded-md py-(--space-sm) font-semibold cursor-pointer  outline-0 border-0 max-lg:px-(--space-md) max-lg:py-(--space-xs) max-lg:text-sm`} ><UserPlus /> Signup</button>
        </div>
        <div className='overflow-auto pb-(--space-md) w-full'>
          <Suspense fallback={<Loader />}>
            {action == 'login' ? <Login /> : <Signup />}

          </Suspense>
        </div>

      </div>
    </div>
  )
}

export default Portal