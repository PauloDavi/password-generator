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

  return (
    <VStack spacing="6" mt="8">
      <CustomSlider
        label="N° de Caracteres"
        min={Math.max(numberOfNumbers + numberOfSymbols, 6)}
        max={40}
        value={numberOfCharacters}
        onChange={(value) => setNumberOfCharacters(value)}
      />

      <CustomSlider
        label="N° de Simbolos"
        max={numberOfCharacters - numberOfNumbers}
        value={numberOfSymbols}
        onChange={(value) => setNumberOfSymbols(value)}
      />

      <CustomSlider
        label="N° de Algarismos"
        max={numberOfCharacters - numberOfSymbols}
        value={numberOfNumbers}
        onChange={(value) => setNumberOfNumbers(value)}
      />
    </VStack>
  );
}
