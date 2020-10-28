import { createContext, useContext } from 'react';
import theme from '../constants/theme';

const UIContext = createContext({ theme });

export const useUI = () => useContext(UIContext);
