import { SET_PRODUCTS, SET_FILTER, SET_PAGE } from './actionTypes';

export const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: products,
});

export const setFilter = (name, value) => ({
    type: SET_FILTER,
    payload: { name, value },
});

export const setPage = page => ({
    type: SET_PAGE,
    payload: page,
});
