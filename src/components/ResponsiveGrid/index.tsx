import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

const ResponsiveGrid = () => {
  return (
    <SimpleGrid minH={200} spacing={2} columns={[1, 2, 3, 4]} >
      {[1, 2, 3, 4, 5, 6].map(item => <Box bg="tomato" height={['100%', '100%', '80px']} padding={[0, null, 20]}></Box>)}
    </SimpleGrid>
  )
}

export default ResponsiveGrid;