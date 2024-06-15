import React ,{ Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// layouts
// import Nav from "./layouts/Navbar/Navbar";
// import Footer from "./layouts/Footer/Footer";
// import MobileNav from "./components/header/MobileHeader";

// // pages
const AfterLogin = React.lazy(() => import("./pages/AfterLogin/AfterLogin"));
// const About = React.lazy(() => import("./pages/About/About"));
// const Contact = React.lazy(() => import("./pages/Contact/Contact"));
// const EventCards = React.lazy(() => import("./components/EventCards/EventCards"));

// // microInteraction
import Loading from "./microInteraction/Load/Load";
// import { Alert } from "./MicroInteraction/Alert";

// // state
// import AuthContext from "./context/auth-context";

// // axios
// import axios from "axios";


function App() {

  return (
    <Router>
          <Routes>

            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <AfterLogin path="/" />
                </Suspense>
              }
            />

         
              <Route
                path="/feed"
                element={
                  <Suspense fallback={<Loading />}>
                    <AfterLogin path="/feed" />
                  </Suspense>
                }
              />

              <Route
                path="/feed/*"
                element={<Navigate to="/feed" replace />}
              />

              <Route
                path="/feed/results"
                element={
                  <Suspense fallback={<Loading />}>
                    <AfterLogin path="/feed/results" />
                  </Suspense>
                }
              />

              <Route
                path="/feed/results/*"
                element={<Navigate to="/feed/results" replace />}
              />

              <Route
                path="/feed/results?search_query=:tagname"
                element={
                  <Suspense fallback={<Loading />}>
                    <AfterLogin path="/feed/results?search_query=:tagname" />
                  </Suspense>
                }
              />
            
              <Route
                path="/community"
                element={
                  <Suspense fallback={<Loading />}>
                    <AfterLogin path="/community" />
                  </Suspense>
                }
              />

              <Route
                path="/community/*"
                element={<Navigate to="/community" replace />}
              />


              <Route
                path="/community/results"
                element={
                  <Suspense fallback={<Loading />}>
                    <AfterLogin path="/community/results" />
                  </Suspense>
                }
              />

              <Route
                path="/community/results/*"
                element={<Navigate to="/community/results" replace />}
              />

              <Route
                path="/community/results?search_query=:tagname"
                element={
                  <Suspense fallback={<Loading />}>
                    <AfterLogin path="/community/results?search_query=:tagname" />
                  </Suspense>
                }
              />
  

            {/*<Route
              path="/EventCards"
              element={
                <Suspense fallback={<Loading />}>
                  <EventCards />
                </Suspense>
              }
            />

            <Route
              path="/Contact"
              element={
                <Suspense fallback={<Loading />}>
                  <Contact />
                </Suspense>
              }
            />*/}

            <Route
              path="*"
              element={
                <Suspense fallback={<Loading />}>
                  <AfterLogin path="*" />
                </Suspense>
              }
            />  
          </Routes>
      
    </Router>
  );
}

export default App;
