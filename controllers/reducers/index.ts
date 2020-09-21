import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import price from './priceReducer';

const rootReducer = combineReducers({ price });

export default rootReducer;
export type TSRoot = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<TSRoot> = useSelector;
