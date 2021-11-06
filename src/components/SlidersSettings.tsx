import { useMemo } from 'react';

import { VStack } from '@chakra-ui/layout';

import { useHome } from '../contexts/HomeContext';
import { CustomSlider } from './CustomSlider';

export function SlidersSettings() {
  const {
    numberOfNumbers,
    numberOfSymbols,
    numberOfCharacters,
    setNumberOfCharacters,
    setNumberOfSymbols,
    setNumberOfNumbers,
  } = useHome();

  const charactersMin = useMemo(
    () => Math.max(numberOfNumbers + numberOfSymbols, 6),
    [numberOfNumbers, numberOfSymbols]
  );

  const symbolsMax = useMemo(
    () => numberOfCharacters - numberOfNumbers,
    [numberOfCharacters, numberOfNumbers]
  );

  const numbersMax = useMemo(
    () => numberOfCharacters - numberOfSymbols,
    [numberOfCharacters, numberOfSymbols]
  );

  return (
    <VStack spacing="6" mt="8">
      <CustomSlider
        label="N° de Caracteres"
        min={charactersMin}
        max={40}
        value={numberOfCharacters}
        onChange={(value) => setNumberOfCharacters(value)}
      />

      <CustomSlider
        label="N° de Simbolos"
        max={symbolsMax}
        value={numberOfSymbols}
        onChange={(value) => setNumberOfSymbols(value)}
      />

      <CustomSlider
        label="N° de Algarismos"
        max={numbersMax}
        value={numberOfNumbers}
        onChange={(value) => setNumberOfNumbers(value)}
      />
    </VStack>
  );
}
