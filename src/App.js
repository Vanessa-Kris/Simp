import "./App.css";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

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
  return (
    <Box sx={{ p: { md: 0, xs: 4 } }}>
      <Grid
        container
        sx={{ p: { md: 5, xs: 3 }, paddingLeft: { md: "300px", xs: "0" } }}
      >
        <AnimatedBox delay={0.2}>
          <Typography variant="h3" sx={{ fontWeight: 500, color: "#fff" }}>
            Justin
          </Typography>

          <Grid item md={12} xs={12} alignItems="center">
            <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
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
                  Wow.... What's it? <DoneAllIcon />
                </Typography>
              </Box>
              <Avatar sx={{ ml: 2 }} src="/" />
            </Box>
          </AnimatedBox>
        </Grid>
      </Grid>
      {/*  */}
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
                  padding: { md: "15px", xs: "20px" },
                  width: "fit-content",
                  marginTop: 0,
                }}
                boxShadow="10px 10px 8px #888888"
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

      <Box>
        <Grid container>
          <Grid item md={6} xs={12}></Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="h2">A Header</Typography>
            <Typography variant="p">
              Just some text about something I'll definetly figure out later. I
              don't know what else to write so I'm going to type rubbish
              now....blah blah blah
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default App;
