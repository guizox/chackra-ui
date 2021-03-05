import React from 'react';
import { BackgroundProps, Box, SimpleGrid } from '@chakra-ui/react';

interface Props {
  size?: number[];
  label?: string;
  color?: BackgroundProps
}

const ResponsiveGrid = ({ size, label, color }: Props) => {

  const data = size || [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid minH={200} spacing={2} columns={[1, 2, 3, 4]} >
      {data.map(item => <Box bg={color?.background || 'tomato'} height={['100%', '100%', '80px']} padding={[0, null, 20]}>
        {label || ''}
      </Box>)}
    </SimpleGrid>
  )
}

export default ResponsiveGrid;