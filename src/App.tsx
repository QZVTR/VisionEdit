import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from './PrivacyPolicy'
import HomePage from './HomePage'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App