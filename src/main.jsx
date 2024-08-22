import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import { store } from './redux/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* to make the store globaly accessible by all component */}
    {/* here store is the name of the store we created  */}
    <Provider store={store}>
    <App />
    </Provider>
    
  </StrictMode>,
)
