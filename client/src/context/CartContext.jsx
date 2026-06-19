import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { addToCartApi, getCartApi } from "../services/cartService";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [addingId, setAddingId] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      setLoading(true);
      try {
        const res = await getCartApi();
        setCartProducts(res.data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCartData();
  }, [addingId]);

  const addToCart = useCallback(async (id) => {
    setLoading(true);
    setAddingId(id);
    try {
      const res = await addToCartApi(id);
      if (res.success) {
        setCartProducts(res.data);
      }
      return res;
    } catch (error) {
      return error.response?.data || error;
    } finally {
      setLoading(false);
      setAddingId(null);
    }
  }, []);

  const value = useMemo(
    () => ({
      cartProducts,
      loading,
      error,
      addingId,
      addToCart,
    }),
    [cartProducts, loading, error, addingId, addToCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
