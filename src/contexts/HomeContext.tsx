import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

import { useColorMode } from '@chakra-ui/color-mode';
import useLocalStorageState from 'use-local-storage-state';

interface HomeContextData {
  value: string[];
  numberOfCharacters: number;
  numberOfSymbols: number;
  numberOfNumbers: number;
  setNumberOfCharacters: (value: number) => void;
  setNumberOfSymbols: (value: number) => void;
  setNumberOfNumbers: (value: number) => void;
  createPassword: () => void;
  toggleColorMode: () => void;
}

interface HomeContextProviderProps {
  children: ReactNode;
}

const HomeContext = createContext({} as HomeContextData);

export const symbols = '!@#$%^&*()_+-=[]{};?';
export const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export function HomeContextProvider({ children }: HomeContextProviderProps) {
  const { colorMode, toggleColorMode: chakraToggleColorMode, setColorMode } = useColorMode();

  const [value, setValue] = useState<string[]>([]);
  const [numberOfCharacters, setNumberOfCharacters] = useLocalStorageState('numberOfCharacters', 8);
  const [numberOfSymbols, setNumberOfSymbols] = useLocalStorageState('numberOfSymbols', 1);
  const [numberOfNumbers, setNumberOfNumbers] = useLocalStorageState('numberOfNumbers', 1);

  const toggleColorMode = useCallback(() => {
    localStorage.setItem('colorMode', colorMode === 'dark' ? 'light' : 'dark');
    chakraToggleColorMode();
  }, [colorMode, chakraToggleColorMode]);

  const createPassword = useCallback(() => {
    const randArray: string[] = [];
    for (let i = 0; i < numberOfNumbers; i++) {
      randArray.push(String(Math.floor(Math.random() * 9)));
    }
    for (let i = 0; i < numberOfSymbols; i++) {
      randArray.push(symbols.charAt(Math.floor(Math.random() * symbols.length)));
    }
    for (let i = 0; i < numberOfCharacters - numberOfSymbols - numberOfNumbers; i++) {
      randArray.push(randomChars.charAt(Math.floor(Math.random() * randomChars.length)));
    }

    setValue(
      randArray
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
  }, [numberOfCharacters, numberOfNumbers, numberOfSymbols]);

  useEffect(() => {
    createPassword();
  }, [createPassword]);

  useEffect(() => {
    const storageColorMode = localStorage.getItem('colorMode');
    if (storageColorMode) {
      setColorMode(storageColorMode);
    }
  }, [setColorMode]);

  return (
    <HomeContext.Provider
      value={{
        value,
        numberOfCharacters,
        setNumberOfCharacters,
        numberOfSymbols,
        setNumberOfSymbols,
        numberOfNumbers,
        setNumberOfNumbers,
        createPassword,
        toggleColorMode,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export function useHome() {
  return useContext(HomeContext);
}
