import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ApolloClient,ApolloProvider,InMemoryCache} from "@apollo/client"
import { BrowserRouter } from "react-router-dom";




const client = new ApolloClient({
  uri:"/graphiql",
  cache:new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
//
root.render(
  <>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </>
);


