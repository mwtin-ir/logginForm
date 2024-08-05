import First from "./components/firstcontent/first";
import LogPage from "./components/logPage/logPage";
import { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import Account from "./components/Account/Account";

function App() {
  const [logedPage, setLogedPage] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  useLayoutEffect(() => {
    const item = localStorage.getItem("user");
    if (item) {
      const user = JSON.parse(item);
      if (user.packLevel) {
        setLoggedIn(true);
      }
    }
  }, []);
  return (
    <>
      <Router>
        <Routes>
          {loggedIn ? (
            <Route path="/" element={<Account />} />
          ) : (
            <Route path="/" element={<First />} />
          )}
          <Route
            path="/login"
            element={<LogPage  />}
          />
          <Route path="/singup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
