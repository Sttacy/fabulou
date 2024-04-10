import { SET_PRODUCTS, SET_FILTER, SET_PAGE } from './actionTypes';

export const searchReducer = (state, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return { ...state, products: payload };
        case SET_FILTER:
            return { ...state, filters: { ...state.filters, [payload.name]: payload.value } };
        case SET_PAGE:
            return { ...state, page: payload };
        default:
            return state;
    }
};
