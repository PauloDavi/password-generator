import { Flex, Text } from '@chakra-ui/layout';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/slider';
import { Tooltip } from '@chakra-ui/tooltip';

interface CustomSliderProps {
  max: number;
  min?: number;
  label?: string;
  value: number;
  onChange: (value: number) => void;
}

export function CustomSlider({ max, min, label, value, onChange }: CustomSliderProps) {
  return (
    <Flex justify="center" w="full">
      <Text w="32" fontWeight="semibold" textAlign="center" mr="4" fontSize="lg">
        {label}
      </Text>

      <Slider min={min} max={max} colorScheme="pink" value={value} onChange={onChange}>
        <SliderTrack height="2" borderRadius="full">
          <SliderFilledTrack />
        </SliderTrack>

        <Tooltip label={value} placement="top" isOpen hasArrow>
          <SliderThumb boxSize="4" />
        </Tooltip>
      </Slider>
    </Flex>
  );
}
