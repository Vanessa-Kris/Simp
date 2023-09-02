import "./App.css";
import { motion, useScroll } from "framer-motion";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Avatar from "@mui/material/Avatar";
import Scroll from "./components/scroll";
import Footer from "./components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faComments,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import { faGooglePlay } from "@fortawesome/fontawesome-free-brands";
import a from "../src/1.png";
import { Button } from "@mui/material";

const AnimatedBox = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <Box>
      <Box sx={{ p: { md: 0, xs: 2 } }}>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        {/* Message Header */}
        <Grid
          container
          sx={{ p: { md: 5, xs: 3 }, paddingLeft: { md: "300px", xs: "0" } }}
        >
          <AnimatedBox delay={0.2}>
            <Typography variant="h3" sx={{ fontWeight: 500, color: "#fff" }}>
              Deku
            </Typography>
            {/*  */}
            {/* Fisrt Message */}
            <Grid item md={12} xs={12} alignItems="center">
              <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
                <Avatar
                  sx={{ mr: 2 }}
                  alt="Avatar"
                  src="https://img.freepik.com/free-vector/little-boy-anime-wearing-winter-clothes_18591-77250.jpg?size=626&ext=jpg"
                />
                <Box
                  justifyContent="flex-start"
                  sx={{
                    bgcolor: "#42A5F5",
                    borderRadius: "30px",
                    padding: { md: "15px", xs: "20px" },
                    width: "fit-content",
                  }}
                  boxShadow="5px 5px 8px #888888"
                >
                  <Typography variant="p">
                    Hey! I've got a surprise for you.
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="p"
                sx={{ ml: 8, color: "#cdcecf", fontSize: "12px" }}
              >
                Aug 21, 3:30pm
              </Typography>
            </Grid>
          </AnimatedBox>
        </Grid>
        {/*  */}
        {/* Reply */}
        <Grid container sx={{ p: { md: 5, xs: 3 } }}>
          <Grid
            item
            md={12}
            xs={12}
            sx={{ marginRight: { md: "300px", xs: "0" } }}
            justifyContent="flex-end"
            display="flex"
          >
            <AnimatedBox delay={1.4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    bgcolor: "#E7E9EB",
                    borderRadius: "30px",
                    padding: { md: "15px", xs: "20px" },
                    marginTop: 0,
                    width: "fit-content",
                  }}
                  boxShadow="5px 5px 8px #888888"
                >
                  <Typography variant="p">
                    Wow 🤩.... What's it? <DoneAllIcon />
                  </Typography>
                </Box>
                <Avatar sx={{ ml: 2 }} src="/" />
              </Box>
            </AnimatedBox>
          </Grid>
        </Grid>
        {/*  */}
        {/* Image message */}
        <Grid container sx={{ p: { md: 5, xs: 3 } }}>
          <Grid
            item
            md={12}
            xs={12}
            sx={{ marginLeft: { md: "300px", xs: "0" } }}
            justifyContent="flex-start"
          >
            <AnimatedBox delay={2.5}>
              <Box sx={{ display: "flex" }}>
                <Avatar
                  sx={{ mr: 2 }}
                  alt="Remy Sharp"
                  src="https://img.freepik.com/free-vector/little-boy-anime-wearing-winter-clothes_18591-77250.jpg?size=626&ext=jpg"
                />
                <Box
                  justifyContent="flex-start"
                  sx={{
                    bgcolor: "#42A5F5",
                    borderRadius: "30px",
                    padding: { md: "5px", xs: "2px" },
                    width: "fit-content",
                    marginTop: 0,
                  }}
                  boxShadow="5px 5px 8px #888888"
                >
                  <Box
                    sx={{ width: { md: "300px", xs: "100%" } }}
                    component="img"
                    src="https://images.unsplash.com/photo-1591160690567-a6b0215b67ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAxfHxwdXBweXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    width="100%"
                    borderRadius="30px"
                  ></Box>
                </Box>
              </Box>
              <Typography
                variant="p"
                sx={{ ml: 8, color: "#cdcecf", fontSize: "12px" }}
              >
                4:00pm
              </Typography>
            </AnimatedBox>
          </Grid>
        </Grid>
        {/*  */}
        {/* Features */}
        <Box
          sx={{
            px: { md: 20, xs: 2 },
            py: { md: 10, xs: 2 },
            color: "#dad8d8",
          }}
        >
          <Typography
            align="center"
            variant="h2"
            sx={{ fontWeight: "700", py: 4 }}
          >
            Features
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            align="center"
          >
            <Grid
              item
              md={5}
              xs={12}
              sx={{
                p: 4,
                bgcolor: "#095256",
                m: { md: 3, xs: 1 },
                height: { md: "270px", xs: "100%" },
              }}
            >
              <Typography variant="h5">
                {" "}
                <FontAwesomeIcon
                  icon={faComments}
                  style={{ paddingRight: 7 }}
                />{" "}
                End-to-End Encryption
              </Typography>
              <Typography>
                With Deku Messaging all your messages are completely secure,
                ensuring utmost privacy. Neither third parties nor we can access
                or read your messages. Deku SMS messaging prioritizes your
                privacy above all else.
              </Typography>
            </Grid>

            <Grid
              item
              md={5}
              xs={12}
              sx={{
                p: 4,
                bgcolor: "#000",
                m: { md: 3, xs: 1 },
                height: { md: "270px", xs: "100%" },
              }}
            >
              <Typography variant="h5">
                {" "}
                <FontAwesomeIcon
                  icon={faShield}
                  style={{ paddingRight: 7 }}
                />{" "}
                Data Protection
              </Typography>
              <Typography>
                With robust encryption and strict access controls, we ensure
                that your data remains safe and confidential. You can use Deku
                Messaging App with confidence, knowing that your personal
                information and messages are shielded from unauthorized access.
              </Typography>
            </Grid>
            <Grid
              item
              md={5}
              xs={12}
              sx={{ p: 4, bgcolor: "#0a1320", m: { md: 3, xs: 1 } }}
            >
              <Typography variant="h5">
                {" "}
                <FontAwesomeIcon
                  icon={faImages}
                  style={{ paddingRight: 7 }}
                />{" "}
                Send Images Using SMS
              </Typography>
              <Typography>
                Deku Messaging App allows you to send images using SMS! We've
                enhanced your messaging experience by enabling you to share not
                only text but also images effortlessly. This new feature makes
                communication even more engaging and expressive.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/*  */}
        {/* Scroll */}
        <Box>
          <Scroll />
        </Box>
        {/*  */}
        {/* How it works */}
        <Box sx={{ p: { md: 10, xs: 0 } }}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              justifyContent="center"
              align="center"
              sx={{ p: 3 }}
            >
              <Box
                sx={{
                  pl: { md: 10, xs: 0 },
                }}
              >
                <Box
                  component="img"
                  src={a}
                  sx={{ width: { md: "300px", xs: "250px" } }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} display="flex">
              <Box
                align="center"
                justifyContent="center"
                margin="auto"
                alignContent="center"
                sx={{
                  pr: { md: 20, xs: 0 },
                  color: "#dad8d8",
                  pb: { md: 0, xs: 4 },
                }}
              >
                <Typography variant="h3" sx={{ p: 3, fontWeight: 700 }}>
                  SMS Gateway
                </Typography>
                <Typography variant="h5">
                  Using Deku messaging, you can setup your personalized SMS
                  Gateway through your mobile device, enabling you to send bulk
                  text messages.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/*  */}
        <Box sx={{ mt: { md: 0, xs: 5 } }}>
          <Typography
            align="center"
            sx={{
              color: "#dad8d8",
              fontWeight: 700,
              fontSize: { md: "90px", xs: "50px" },
            }}
          >
            Get Deku Messaging
          </Typography>
          <Box align="center" sx={{ mb: { md: 10, xs: 5 } }}>
            <Button
              size="large"
              sx={{ borderRadius: "30px", color: "#cdcecf", p: 2, m: 1 }}
              variant="outlined"
            >
              <FontAwesomeIcon
                icon={faGooglePlay}
                style={{ padding: 5 }}
                size="large"
              />{" "}
              Google Play
            </Button>
            <Button
              size="large"
              sx={{ borderRadius: "30px", color: "#cdcecf", p: 2, m: 1 }}
              variant="outlined"
            >
              Deku for Web
            </Button>
          </Box>
        </Box>
        {/*  */}
      </Box>
      {/*Footer  */}
      <Footer />
      {/*  */}
    </Box>
  );
};

export default App;
