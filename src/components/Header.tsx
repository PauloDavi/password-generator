import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, RepeatIcon, SunIcon } from '@chakra-ui/icons';
import { HStack, Text } from '@chakra-ui/layout';

import { useHome } from '../contexts/HomeContext';

interface HeaderProps {
  createPassword: () => void;
}

export function Header({ createPassword }: HeaderProps) {
  const { toggleColorMode } = useHome();
  const { colorMode } = useColorMode();

  return (
    <HStack as="header" spacing="4" justify="space-between" align="center">
      <IconButton
        onClick={toggleColorMode}
        variant="solid"
        aria-label="color mode button"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      />

      <Text textAlign="center" fontWeight="bold" fontSize="4xl">
        Gerador de senhas
      </Text>

      <IconButton
        variant="outline"
        colorScheme="pink"
        fontSize="20px"
        onClick={createPassword}
        aria-label="reload button"
        icon={<RepeatIcon />}
      />
    </HStack>
  );
}
