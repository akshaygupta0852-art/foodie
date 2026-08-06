const token = localStorage.getItem('token');

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