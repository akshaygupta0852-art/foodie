const token = localStorage.getItem("token");

export async function addToCart(userId, foodId, restrauId, quantity = 1) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/cart/item/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        foodId,
        userId,
        restrauId,
        quantity,
      }),
    },
  );
  const result = await response.json();
}

export async function getCartItem() {
  if(token){const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/view`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  if (response.ok) {
    return result?.cart;
  } else {
    console.error(response?.message);
  }}
}

export async function clearCart(){
  const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/clear`, {
    headers : {
      Authorization : `Bearer ${token}`
    }
  })
  const result = await response.json();
  return result;
}

export async function updateCartQuantity(foodId, newQty){
  const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/itemqty`, {
    method : "PATCH",
    headers : {
      "Content-Type" : "application/json",
      Authorization : `Bearer ${token}`
    },
    body : JSON.stringify({foodId, newQty})
  });
  const result = await response.json();
  console.log(result);
}

export async function removeCartItem(foodId){
  const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/item/remove`, {
    method : 'DELETE',
    headers :{
      "Content-Type" : 'application/json',
      Authorization : `Bearer ${token}`
    },
    body : JSON.stringify({foodId})
  });
  const result = await response.json();
  return result;
}