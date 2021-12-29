import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Nav from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Home /> */}
    </ChakraProvider>
  );
}

export default App;
