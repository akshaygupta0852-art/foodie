import { User, UserPlus } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import Loader from "../../components/common/Loader";
const Signup = lazy(() => import('./adminform/Signup'));
const Login = lazy(() => import('./adminform/Login'));


const AdminForm = () => {
    const [focus, setFocus] = useState(true)
    return (
        <div className='w-1/3 h-3/4 bg-white rounded-2xl shadow-2xl flex flex-col gap-3 items-center max-lg:gap-1 max-lg:w-9/10 max-lg:h-4/5'>
            <img src="../src/assets/images/logo.png" className="h-25 max-lg:h-18" />
            <div className="h-1 -mt-8 w-1/8 bg-(--primary) rounded-2xl max-lg:-mt-4"></div>
            <span className="text-3xl uppercase font-semibold text-(--primary) max-lg:text-lg">Admin panel</span>
            {/* <span className="text-sm">Manage, Monitor, Grow your business.</span> */}
            <div className="flex rounded-sm overflow-hidden mt-3">
                <button onClick={() => {
                    setFocus((prev) => !prev)
                }} className={`max-lg:text-sm ${focus ? 'focusBtn' : ''} max-lg:py-(--space-xs) px-(--space-xl) flex items-center gap-2`}><User size={16} /> Login</button>
                <button onClick={() => {
                    setFocus((prev) => !prev)
                }} className={`max-lg:text-sm ${!focus ? 'focusBtn' : ''} max-lg:py-(--space-xs) px-(--space-xl) flex items-center gap-2`}><UserPlus size={16} /> Signup</button>
            </div>
            <div className="overflow-auto mb-4">
                <Suspense fallback={<Loader />}>
                    {focus ? <Login /> : <Signup />}
                </Suspense>
            </div>
        </div>
    )
}

export default AdminForm