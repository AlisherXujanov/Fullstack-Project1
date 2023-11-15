import { Routes, Route, useLocation } from 'react-router-dom'
import NoPage from './NoPage.jsx'
import Auth from '../components/Authentication'
import Navigation from '../components/Navigation'

export default function AllComponents() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Auth />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}
