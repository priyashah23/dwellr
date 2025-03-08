import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './ui/theme/theme.ts';
import { BrowserRouter, Routes, Route } from 'react-router';
import Preferences from './Preferences.tsx';
import NotFound from './NotFound.tsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Properties from './Properties.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
