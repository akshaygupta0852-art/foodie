export async function getDashboardData (){
    const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/data`,{
        headers : {
            Authorization : `Bearer ${localStorage.getItem('Admintoken')}`
        }
    })
    const result = await response.json();
    return result;
}

export async function changeOrderStatus(id, status){
    const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/orders/${id}?status=${status}`,{
        method : 'PATCH',
        headers : {
            Authorization : `Bearer ${localStorage.getItem('Admintoken')}`
        }
    })
    const result = await response.json()
    return result;
}