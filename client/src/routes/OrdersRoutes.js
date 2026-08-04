const token = localStorage.getItem("token");

export async function placeOrder(items, address, restaurant) {
  if (token) {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/order/place`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ items, address, restaurant }),
      },
    );

    const result = await response.json();
    return result;
  }
}

export async function checkOrder(orderId) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/order/find/${orderId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(result.message || "Order verification failed");
  }

  const result = await response.json();
  return result;
}
export async function orderHistory(){
  const response = await fetch(`${import.meta.env.VITE_API_URL}/order/all`,{
    headers : {
      Authorization : `Bearer ${token}`
    }
  });
  const result = await response.json();
  return result;
}

export async function cancelOrder(orderId) {
  console.log(orderId)
  const response = await fetch(`${import.meta.env.VITE_API_URL}/order/cancel/${orderId}`,{
    method : 'PATCH',
    headers :{
      Authorization : `Bearer ${token}`
    }
  });
  const result = await response.json();
  console.log(result)
  return result;
}


export async function categorisedOrders(type){
  const response = await fetch(`${import.meta.env.VITE_API_URL}/order/view/${type}`,{
    headers :{
      Authorization : `Bearer ${token}`
    }
  });

  const result = await response.json();
  console.log(result);
  return result
}