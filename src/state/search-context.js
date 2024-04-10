import { createContext, useContext, useReducer } from 'react';
import { initialSearchState } from './search-state';
import { searchReducer } from './search-reducer';

const SearchStateContext = createContext('searchState');

const SearchProvider = ({ children }) => {
    const [state, dispatch] = useReducer(searchReducer, { ...initialSearchState });

    return <SearchStateContext.Provider value={[state, dispatch]}>{children}</SearchStateContext.Provider>;
};

const useSearchState = () => {
    const context = useContext(SearchStateContext);

    return context;
};

const setPage = page => ({
    type: 'SET_PAGE',
    payload: page,
});

export { useSearchState, setPage };

export default SearchProvider;
