import "./App.css";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Login from "./components/Login";
import Info from "./components/Info";
import Param from "./components/Param";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>MY PAGE</h1>
        <h2>메뉴</h2>
        <Link to="/">HOME</Link>|{" "}
        {/* activeclassname 은 소문자로 써줘야 콘솔에 경고창이 나오지 않는다. */}
        <NavLink to="/main" activeclassname={App.active}>
          MAIN
        </NavLink>
        | {/* react-router-dom V6 이후부터 아래 처럼 사용 */}
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          LOGIN
        </NavLink>
        | <Link to="/info">INFO</Link> | <Link to="/param/4">PARAM</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/info" element={<Info />} />
          <Route path="/param/:id" element={<Param />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
