import { useState } from 'react'
import DashboardActivity from '../components/Dashboard/DashboardActivity'
import DashboardHeader from '../components/Dashboard/DashboardHeader'
import DashboardSidebar from '../components/Dashboard/DashboardSidebar'
import DashboardStats from '../components/Dashboard/DashboardStats'
import RecentOrders from '../components/Dashboard/RecentOrders'
import QuickActions from '../components/Dashboard/QuickActions'
import DashboardNavbar from '../components/Dashboard/DashboardNavbar.jsx'


const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="flex">
                <main className='flex-1'>
                    <div>
                        <DashboardNavbar setIsOpen={setIsOpen} />
                        <DashboardHeader />
                        <DashboardStats />
                    </div>
                    <div className="grid">
                        <RecentOrders />
                    </div>

                    <div className="grid">
                        <QuickActions />
                    </div>
                </main>
                <DashboardSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            </div>
        </>
    )
}

export default Dashboard