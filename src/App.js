import "./App.css";
import { motion, useScroll } from "framer-motion";
import Box from "@mui/material/Box";
import Scroll from "./components/scroll";
import Footer from "./components/footer";
import Features from "./components/features";
import Banner from "./components/banner";
import Gateway from "./components/gateway";
import Download from "./components/download";

const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <Box>
      <Box>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Banner />
        <Features />
        <Scroll />
        <Gateway />
        <Download />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
