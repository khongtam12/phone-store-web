import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { IntlProvider } from 'react-intl';
import messagesInVietnamese from "@/locales/vi.json";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Cache data trong 5 phút
      retry: 2, // Thử lại 2 lần nếu gọi API thất bại
    },
  },
});
const currentLocale = 'vi';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <IntlProvider
        locale={currentLocale}
        messages={messagesInVietnamese}>
        <App />
      </IntlProvider>

    </QueryClientProvider>

  </StrictMode>,
)
