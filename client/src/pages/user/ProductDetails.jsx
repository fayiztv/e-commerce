import { useEffect, useState } from "react";
import ProductCard from "../../components/user/ProductCard";
import { getProductDetailsApi } from "../../services/productService";
import { useParams } from "react-router-dom";
import { useShop } from "../../hooks/useShop";

export default function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const [inStock, setInStock] = useState({});
  const { id } = useParams();
  const { products } = useShop();

  // const relatedProducts = products.filter(
  //   (p) => p.category._id === product.category._id
  //   &&
  //   p._id != product._id,
  // );

  const relatedProducts = products.slice(0, 4);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProductDetailsApi(id);
      setProduct(res.data);
      setInStock(res.data.stock > 0);
    };
    fetchProduct();
  }, [id]);
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Product Image */}
        <div>
          <div className="overflow-hidden rounded-2xl border">
            <div className="h-70 bg-gray-200 md:h-100"></div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-bold">{product?.name}</h1>

          <p className="mb-3 text-gray-500 font-semibold">
            Category: {product?.category?.name}
          </p>

          <p className="mb-6 text-4xl font-bold">₹{product?.price}</p>

          <div className="mb-8">
            <h2 className="mb-3 text-xl font-semibold">Description</h2>

            <p className="leading-7 text-gray-600">{product?.description}</p>
          </div>

          {/* Stock */}
          <div className="mb-8">
            {inStock ? (
              <span className="text-sm text-green-600">In Stock</span>
            ) : (
              <span className="text-sm text-red-600">Out of Stock</span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 md:flex-row">
            <button
              disabled={!inStock}
              className="flex-1 rounded-xl bg-black py-4 text-white transition hover:bg-gray-800 disabled:bg-gray-400"
            >
              Add To Cart
            </button>

            <button
              disabled={!inStock}
              className="flex-1 rounded-xl border py-4 transition hover:bg-gray-100 disabled:bg-gray-400 disabled:border-0 disabled:text-white"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-24">
        <h2 className="mb-10 text-3xl font-bold">Related Products</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
