import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {extendTheme,ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import { PostProvider } from "./context/post-context";
import { Provider } from "react-redux";
import {store} from '../src/redux/redux-src/app/store'
// Call make Server
makeServer();

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })


ReactDOM.render(
  <React.StrictMode>
    <PostProvider>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    </ChakraProvider>
    </PostProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
