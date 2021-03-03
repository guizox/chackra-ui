import { Box, Image, Text, Flex } from '@chakra-ui/react';
import React from 'react';

const ResponsiveCard = () => {
  return (
    <Flex w={["90vw", "90vw", "90vw", "100%"]} justify="center" direction={['column', 'column', 'column', 'column', 'row']}>
      {[1, 2, 3, 4].map(item =>
        <Flex align="center" mx={5} mt={[10, 10, 10, 0]}>
          <Image
            borderRadius="lg"
            src="https://bit.ly/2jYM25F"
            alt="Woman paying for a purchase"
            w={['100%', '100%', '200px', '250px', '350px']}
          />


          <Box mx={4}>
            <Text>
              TESTE
            </Text>

            <Text>Teste 2</Text>
          </Box>
        </Flex>
      )}
    </Flex>
  )
}

export default ResponsiveCard;