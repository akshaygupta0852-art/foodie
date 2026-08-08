export async function addFood(data){
    console.log(import.meta.env.VITE_API_URL)
    const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/food/add`,{
        method : "POST",
        headers: {
            Authorization : `Bearer ${localStorage.getItem('Admintoken')}`
        },
        body : data
    })
    const result = await response.json();
    console.log(result);
    return result;
}

export async function deleteFood(id){
    const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/food/delete?d=${id}`,{
        method : "DELETE",
        headers :{
            Authorization : `Bearer ${localStorage.getItem('Admintoken')}`
        }
    })
    const result = await response.json();
}