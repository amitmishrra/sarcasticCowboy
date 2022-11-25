import { Route, Routes, HashRouter } from "react-router-dom"
import CommonContainer from "./CommanContainer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Buzz from "./pages/Buzz/quotes/Index";
import ThreeD from "./Articles/ThreeD";
import SaveMoney from "./Articles/SaveMoney";
import Dating from "./Articles/Dating";
import JokesPage from "./pages/Buzz/jokes";

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

          <Route path="/blogs"
            element={
              <CommonContainer>
                <Blog />
              </CommonContainer>
            } />

          <Route path="/quotes"
            element={
              <CommonContainer>
                <Buzz/>
              </CommonContainer>
            } />
          
          <Route path="/jokes"
            element={
              <CommonContainer>
                <JokesPage/>
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
          
          <Route path="/3_D's_of_my_life"
            element={
              <CommonContainer>
                <ThreeD />
              </CommonContainer>
            } />
          
          <Route path="/How_to_save_money"
            element={
              <CommonContainer>
                <SaveMoney />
              </CommonContainer>
            } />
          
          <Route path="/Are_you_dating_a_parasite"
            element={
              <CommonContainer>
                <Dating />
              </CommonContainer>
            } />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
