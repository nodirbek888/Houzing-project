import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Root from './root/index';
import 'antd/dist/antd.css'
import {QueryClient, QueryClientProvider} from 'react-query'

const query = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <QueryClientProvider client={query}>
    <BrowserRouter>
      <Root/>
    </BrowserRouter>
    </QueryClientProvider>
  </div>
);


