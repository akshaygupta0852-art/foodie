import { ArrowLeft, Bell } from 'lucide-react'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
const AdminNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center h-20 justify-between px-(--space-md) py-(--space-xs) max-lg:py-0 '>
      <div className='flex items-center'>
    <ArrowLeft onClick={()=>{
      navigate('/userprofile')
    }} size={30} className='hover:bg-gray-200 cursor-pointer max-lg:scale-75'/>
      <img src={logo} className='h-30 object-center' alt="logo" />
      </div>
      <Bell size={30} className='cursor-pointer hover:bg-gray-200 max-lg:scale-75'/>
    </div>
  )
}

export default AdminNavbar