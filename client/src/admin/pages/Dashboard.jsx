import { useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import Options from '../components/Dashboard/Options'
import Profile from '../components/Dashboard/Profile'


const Dashboard = () => {
    const [fnc, setFnc] = useState('Add Shop');
    return (
        <div className='min-h-screen h-screen min-w-screen w-screen'>
            <header className='pt-2'>
                <AdminNavbar />
            </header>
            <div className='flex w-full px-(--space-sm) gap-3 py-(--space-md)'>

                <main className='max-w-1/2 flex-col flex gap-4 max-lg:max-w-full'>
                    <section>
                        <Profile />
                    </section>
                    <section>
                        <Options setFnc={setFnc} fnc={fnc} />
                    </section>
                </main>
                <aside className='shadow-2xl px-(--space-lg) py-(--space-md) rounded-2xl flex-1 max-lg:hidden'>
                    <span>{fnc}</span>
                    <div className='overflow-auto'>
                        
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default Dashboard