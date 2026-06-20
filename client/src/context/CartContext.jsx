import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  addToCartApi,
  clearCartItemApi,
  getCartApi,
  updateCartApi,
} from "../services/cartService";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState({items: []});
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
  }, []);

  const addToCart = useCallback(async (id) => {
    setLoading(true);
    setAddingId(id);
    try {
      const res = await addToCartApi(id);
      if (res.success) {
        const products = await getCartApi();
        setCartProducts(products.data);
      }
      return res;
    } catch (error) {
      return error.response?.data || error;
    } finally {
      setLoading(false);
      setAddingId(null);
    }
  }, []);

  const updateCart = useCallback(async (data) => {
    setLoading(true);
    try {
      const res = await updateCartApi(data);

      if (res.success) {
        const products = await getCartApi();
        setCartProducts(products.data);
      }
      return res;
    } catch (error) {
      return error.response?.data || error;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearCartItem = useCallback(async (id) => {
    setLoading(true);
    
    try {
      const res = await clearCartItemApi(id);

      if (res.success) {
        const products = await getCartApi();
        setCartProducts(products.data);
      }
      return res;
    } catch (error) {
      return error.response?.data || error;
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      cartProducts,
      loading,
      error,
      addingId,
      addToCart,
      updateCart,
      clearCartItem,
    }),
    [cartProducts, loading, error, addingId, addToCart, updateCart, clearCartItem],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
