import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
import MainGuard from "./pages/MainGuard";
import LoginGuard from "./pages/LoginGuard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LoginGuard />}>
          <Route path="/" element={<Login />} />
        </Route>

        <Route element={<MainGuard />}>
          <Route path="/main" element={<Main />} />
        </Route>

        <Route path="*" element={<h4>404 sayfa bulunamadı</h4>} />
        
      </Routes>
    </Router>
  )
}

export default App