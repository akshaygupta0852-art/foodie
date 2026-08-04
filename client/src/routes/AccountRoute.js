const token = localStorage.getItem("token");

export async function getProfile() {
  if (token) {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/user/profile`,{
        headers : {
            Authorization : `Bearer ${token}`
        }
      }
    );
    const result = await response.json();
    return result;
  }
}