import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/pages/LANDING/Landing'
import Ordering from './components/pages/ORDER/Ordering'
import LoginPage from './components/pages/LOGIN/LoginPage'
import NothingHere from './components/pages/NothingHere'
import SampTExt from './components/ui/SampTExt'
import LBody_2 from './components/pages/LANDING/LBody_2'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing/>} />
          <Route path='/landing' element={<Landing/>} />
          <Route path='/ordering' element={<Ordering/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/samp' element={<SampTExt/>} />
          <Route path='*' element={<NothingHere/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
