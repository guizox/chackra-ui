import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Bears from "./components/Bears";
import Bufalos from "./components/Bufalos";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" >

          <ColorModeSwitcher justifySelf="flex-start" />

          <Bufalos />
          <Bears />
        </Grid>
      </Box>
    </ChakraProvider>
  )
}