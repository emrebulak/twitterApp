import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
import MainGuard from "./pages/MainGuard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<MainGuard />}>
          <Route path="/main" element={<Main />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App