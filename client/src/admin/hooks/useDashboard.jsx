import { useState, useEffect } from "react";
import { getDashboardData } from "../services/dashboardAPI";


const useDashboard = ()=>{
    const [loading, setLoading] = useState(true);
    const [restaurants, setRestaurants] = useState([]);
    const [admin, setAdmin] = useState([]);
    const [foods, setFoods] = useState([]);
    const [orders, setOrders] = useState([]);
    const fetchAdminData = async ()=>{
        const result = await getDashboardData();
        if(result.type === 'Done'){
            setAdmin(result.admin);
            setFoods(result.foods);
            setRestaurants(result.rest);
            setOrders(result.orders);
            setLoading(false)
        }
        setLoading(false)
    }
    useEffect(() => {
      fetchAdminData();
    }, [])
    return {
        restaurants,
        admin,
        foods,
        orders,
        refreshDashboard : fetchAdminData
    }
}
export default useDashboard;