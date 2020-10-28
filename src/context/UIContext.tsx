import { createContext, useContext } from 'react';
import theme from '../constants/theme';

const UIContext = createContext({ theme, darkMode: false });

export const UIProvider = UIContext.Provider;

export const useUI = () => useContext(UIContext);
