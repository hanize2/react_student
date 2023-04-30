import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Info from "./components/Info";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>MY PAGE</h1>
        <h2>메뉴</h2>
        <Link to="/main">MAIN</Link> |<Link to="/login">LOGIN</Link> |
        <Link to="/info">INFO</Link>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
