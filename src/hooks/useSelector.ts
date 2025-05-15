
import { TypedUseSelectorHook, useSelector as useSelectorRedux } from 'react-redux';
import type { RootState } from '../redux/store';

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;
