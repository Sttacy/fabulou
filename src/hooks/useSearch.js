import { useEffect, useState } from 'react';
import axios from 'axios';

import { useSearchState } from '../state/search-context';
import { setProducts } from '../state/actionCreators';

const BASE_URL = 'https://makeup-api.herokuapp.com/api/v1/products';

const useSearch = () => {
    const [state, dispatch] = useSearchState();
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = () => {
        setIsLoading(true);
        dispatch(setProducts([]));

        let params = {};

        if (state.filters.brand !== 'all') {
            params = {
                ...params,
                brand: state.filters.brand,
            };
        }

        params = {
            ...params,
            product_type: state.filters.productType,
            price_greater_than: state.filters.minPrice,
            price_less_than: state.filters.maxPrice,
        };

        axios
            .get(`${BASE_URL}.json`, {
                params,
            })
            .then(({ data }) => {
              
                const sortedProducts = data.slice(0, 50).sort((a, b) => {
                    const priceA = parseFloat(a.price);
                    const priceB = parseFloat(b.price);

                    if (priceA === 0 && priceB !== 0) {
                        return 1;
                    } else if (priceA !== 0 && priceB === 0) {
                        return -1;
                    } else {
                        return priceA - priceB;
                    }
                });

                dispatch(setProducts(sortedProducts));
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getProducts();
    }, [state.filters]);

    return {
        isLoading,
    };
};

export default useSearch;
