
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/footer'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
