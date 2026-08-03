const token = localStorage.getItem("token");

export async function saveAddress(address, label = "Home") {
  const mobileRegex = /^[6-9]\d{9}$/;
  if (!mobileRegex.test(address.mobile)) {
    console.log("Invalid mobile number");
    return;
  }

  const response = await fetch(`${import.meta.env.VITE_API_URL}/address/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(address, label),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}

export async function getAddresses() {
  if (token) {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/address/view`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const result = await response.json();
    return result;
  }
}

export async function deleteAddress(addressId) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/address/delete`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ addressId }),
    },
  );
  const result = await response.json();

  return result;
}
