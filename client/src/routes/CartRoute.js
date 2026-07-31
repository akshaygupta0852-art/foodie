export async function addToCart(userId, foodId, restrauId, quantity = 1) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/item/add`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            Authorization : `Bearer ${token}`
        },
        body : JSON.stringify({
            foodId,
            userId,
            restrauId,
            quantity
        })
    });
    const result = await response.json();
    console.log(result);
}