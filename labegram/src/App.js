import Router from "./router/Router";
import { ChakraProvider } from "@chakra-ui/react"
import React from 'react';

function App() {
  return (
    <ChakraProvider>
     <Router />
    </ChakraProvider>
  );
}

export default App;
