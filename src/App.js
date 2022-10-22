import "locomotive-scroll/dist/locomotive-scroll.css";

import { useEffect, useRef, useState } from "react";

import About from "./sections/About";
import { AnimatePresence } from "framer-motion";
import Banner from "./sections/Banner";
import Footer from "./sections/Footer";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./sections/Home";
import Loader from "./components/Loader";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import NewArrivals from "./sections/NewArrivals";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Shop from "./sections/Shop";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Themes";

function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{loaded ? null : <Loader />} </AnimatePresence>
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Shop />
              <Banner />
              <NewArrivals />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
