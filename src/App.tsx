import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  GridItem,
  Grid,
  theme,
  Image,
  Center,
  Flex,
  Square,
  Spacer,
  HStack,
  CircularProgress,
  Skeleton,
  SlideFade,
  Button,
} from "@chakra-ui/react"
import ResponsiveCard from './components/ResponsiveCard';
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Dialog from "./components/Dialog"

export const App = () => {

  const [fade, setFade] = React.useState(false);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" >
          <ColorModeSwitcher justifySelf="flex-start" />

          <ResponsiveCard />

          {/* Entendo o Grid */}
          {/* gap é o spacing do material */}
          <Box width="100%" p={3}>
            <HStack>
              <Button onClick={() => {
                setFade(!fade)
              }}>
                {!fade ? 'Open' : 'Close'} Fade sample
              </Button>

              <Grid w="100%" ml={3}>
                <SlideFade in={fade} offsetY="20px">
                  <Grid h="200px" templateRows="repeat(5, 1fr)" templateColumns="repeat(20, 1fr)" gap={2}>
                    <GridItem colSpan={1} rowSpan={3} bg="blue"></GridItem>
                    <GridItem colSpan={1} rowSpan={5} bg="papayawhip" />
                    <GridItem colSpan={1} rowSpan={4} bg="papayawhip" />
                    <GridItem colSpan={17} bg="papayawhip" />
                  </Grid>
                </SlideFade>
              </Grid>

            </HStack>
          </Box>




          <Box>
            <Dialog />
          </Box>

          <HStack spacing="15%">

            <Box maxW={300} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Box d="flex" alignItems="flex-start">
                <Image src={'https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_900x506.png'} alt={'naruto'} />
              </Box>

              {/** mt = margin top */}
              {/** IsTruncated ja resolve o ... quando o texto é maior que o espaco. */}
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                Algum titulo
            </Box>
            </Box>

            <Center mt={3} w="200px" h="200px" bg="tomato" color="white" borderRadius={'xl'} fontSize="9xl">
              C
          </Center>

            <Flex>
              <Box p="4" bg="red.400">
                Box 1
            </Box>

              <Spacer />

              <Box p="4" bg="green.400">
                Box 2
            </Box>
            </Flex>



            <Box shadow="md" borderWidth="1px">
              <CircularProgress isIndeterminate color="green.300" />
            </Box>

            <Box shadow="md" borderWidth="1px">
              <Skeleton height="20px" width="200px" />
            </Box>

          </HStack>


          <Flex mt={3} color="white" >
            <Center w="100px" bg="green">
              <Text> Box 1 </Text>
            </Center>

            <Square bg="blue.500" size="150px">
              <Text> Box 2</Text>
            </Square>

            <Box flex="1" bg="tomato">
              <Text>Box 3</Text>
            </Box>
          </Flex>

          <VStack mt={3} spacing={3}>
            <Box shadow="md" borderWidth="1px" w="100%" alignItems="center">
              TESTE
          </Box>


          </VStack>


        </Grid>
      </Box>
    </ChakraProvider>
  )
}