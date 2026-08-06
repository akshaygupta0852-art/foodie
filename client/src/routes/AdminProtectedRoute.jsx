import { Navigate, Outlet } from "react-router-dom";
import AdminLogin from "../admin/pages/AdminLogin";
const AdminProtectedRoute = () => {
    const token = localStorage.getItem('Admintoken');
  return token ? <Outlet/> : <Navigate to='/admin/portal' replace />
}

export default AdminProtectedRoute