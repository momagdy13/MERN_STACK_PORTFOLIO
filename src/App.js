import Fotter from "./Components/Footer/Fotter";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Website from "./Pages/Website";
import Portfolio from "./Pages/Portfolio";
import ERR from "./Components/ERR/ERR";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} Component={HomePage} />
          <Route path="/websites" Component={Website} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/*" Component={ERR} />
        </Routes>

        <Fotter />
      </BrowserRouter>
    </>
  );
}

export default App;
