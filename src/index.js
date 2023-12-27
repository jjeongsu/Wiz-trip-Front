/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { colorTheme } from './styles/theme';
import { GlobalStyle } from './styles/global-style';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './services';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
const store = createStore(rootReducer, composeWithDevTools());
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <GlobalStyle />
      <ThemeProvider theme={colorTheme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
