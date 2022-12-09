import { Routes, Route, BrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Store from '../pages/Store'
import ComingSoon from '../pages/ComingSoon'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
