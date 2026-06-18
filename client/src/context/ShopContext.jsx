import { createContext, useEffect, useMemo, useState } from "react";
import { getProductsApi } from "../services/productService";
import { getCategoriesApi } from "../services/categoryServices";

export const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          getProductsApi(),
          getCategoriesApi(),
        ]);

        setProducts(productsRes.data);
        setCategories(categoriesRes.data);
      } catch (error) {
        console.log(error);
        setError(error.message)
      } finally {
        setLoading(false);
      }
    };
    fetchShopData();
  }, []);

  const value = useMemo(() => ({
    products,
    categories,
    loading,
    error
  }), [products, categories, loading, error]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
