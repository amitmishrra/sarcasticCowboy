import { Route, Routes, HashRouter } from "react-router-dom"
import CommonContainer from "./CommanContainer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/"
            element={
              <CommonContainer>
                <Home />
              </CommonContainer>
            } />
          <Route path="/blog"
            element={
              <CommonContainer>
                <Blog />
              </CommonContainer>
            } />
          <Route path="/about"
            element={
              <CommonContainer>
                <About />
              </CommonContainer>
            } />
          <Route path="/contact"
            element={
              <CommonContainer>
                <Contact />
              </CommonContainer>
            } />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
