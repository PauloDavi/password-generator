import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { useClipboard } from '@chakra-ui/hooks';
import { Flex, Text } from '@chakra-ui/layout';
import { v4 } from 'uuid';

import { randomChars, symbols } from '../contexts/HomeContext';

interface ShowPasswordProps {
  value: string[];
}

export function ShowPassword({ value }: ShowPasswordProps) {
  const { colorMode } = useColorMode();
  const { hasCopied, onCopy } = useClipboard(value.join(''));

  return (
    <Flex
      bg={colorMode === 'light' ? 'white' : 'gray.600'}
      boxShadow="lg"
      gridGap="2"
      direction={['column', 'row']}
      borderRadius="md"
      align="center"
      mx="auto"
      p="4"
      mt="4"
      mb={2}
    >
      <Flex gridGap="1px" fontSize="lg" fontWeight="semibold">
        {value.map((o) => {
          if (symbols.includes(o)) {
            return (
              <Text key={v4()} as="span" color={colorMode === 'light' ? 'blue' : 'blue.400'}>
                {o}
              </Text>
            );
          } else if (randomChars.includes(o)) {
            return (
              <Text key={v4()} as="span">
                {o}
              </Text>
            );
          } else {
            return (
              <Text key={v4()} as="span" color={colorMode === 'light' ? 'green' : 'greenyellow'}>
                {o}
              </Text>
            );
          }
        })}
      </Flex>

      <Button colorScheme="pink" onClick={onCopy} ml={2}>
        {hasCopied ? 'Copiado' : 'Copiar'}
      </Button>
    </Flex>
  );
}
