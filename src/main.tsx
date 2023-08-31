import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StorePorvider }  from 'react-redux'
import { RouterProvider } from 'react-router-dom';
import { AppStore } from './store/store';
import { AppRouter } from './router/AppRouter';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StorePorvider store={AppStore}>
			<RouterProvider router={AppRouter} />
		</StorePorvider>
  </React.StrictMode>,
)
