import { createContext, useContext, useEffect, useState } from "react";
import { getAddresses } from "../routes/AddressRoute";
import { getCartItem } from "../routes/CartRoute";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [selected, setSelected] = useState(null);


    const handleGetAddresses = async () => {
        const data = await getAddresses();
        setAddresses(data?.address);
    }

    const getLatestCart = async () => {
        const data = await getCartItem();
        setCart(data);
    };

    useEffect(() => {
        getLatestCart();
        handleGetAddresses();
    }, []);
    const defaultAddress = addresses.find((add) => add.isDefault);
    useEffect(() => {
        if (defaultAddress) {
            setSelected(defaultAddress._id);
        }
    }, [defaultAddress]);

    return (
        <CartContext.Provider value={{ cart, setCart, addresses, selected, setSelected, setAddresses, handleGetAddresses }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}