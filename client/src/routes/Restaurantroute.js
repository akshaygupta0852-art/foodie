const token = localStorage.getItem('token');
const adminToken = localStorage.getItem('Admintoken');

export async function favouriteOperation(restId){
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/restaurants/follow?r=${restId}`,{
        method : 'PATCH',
        headers :{
            Authorization : `Bearer ${token}`
        }
    });
    const result = await response.json();
    return result;
}

export async function addRestaurant(data) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/add/restaurant`,{
        method : 'POST',
        headers :{
            Authorization : `Bearer ${adminToken}`
        },
        body : data
    })
}