import { useEffect, useState } from "react";
import axios from "axios";

const PRODUCTS_COUNT = 10;
const BASE_URL = "https://makeup-api.herokuapp.com/api/v1/products";

const useGetTopProducts = (brand) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTopProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}.json`, {
          params: {
            brand: brand,
          },
        });
        const data = response.data;
        const selectedProducts = data.slice(1, PRODUCTS_COUNT);
        setProducts(selectedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top products:", error);
        setLoading(false);
      }
    };

    getTopProducts();
  }, [brand]);

  return { products, loading };
};

export default useGetTopProducts;
