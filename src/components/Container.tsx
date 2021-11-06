import { ReactNode } from 'react';

import { useColorMode } from '@chakra-ui/color-mode';
import { Flex } from '@chakra-ui/layout';

interface StyleProps {
  children: ReactNode;
}

export function Container({ children }: StyleProps) {
  const { colorMode } = useColorMode();

  return (
    <Flex
      bg={colorMode === 'light' ? 'gray.200' : 'gray.800'}
      h="100vh"
      w="full"
      justify="center"
      align="center"
      px="6"
      py="4"
    >
      <Flex
        maxW="5xl"
        mx="auto"
        w="full"
        direction="column"
        boxShadow={colorMode === 'light' ? '2xl' : ''}
        background={colorMode === 'light' ? 'white' : 'gray.700'}
        borderRadius="md"
        px="6"
        py="4"
      >
        {children}
      </Flex>
    </Flex>
  );
}
