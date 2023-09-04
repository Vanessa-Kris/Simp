import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Avatar from "@mui/material/Avatar";
import { Parallax } from "react-scroll-parallax";

const AnimatedBox = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function Banner() {
  return (
    <Parallax translateY={[-10]}>
      <Box className="banner" sx={{ p: { md: 0, xs: 2 } }}>
        <Grid
          container
          sx={{
            p: { md: 3, xs: 2 },
            paddingLeft: { md: "300px", xs: "0" },
            mt: { md: 7, xs: 0 },
          }}
        >
          <AnimatedBox delay={0.2}>
            <Typography variant="h4" sx={{ fontWeight: 500, color: "#fff" }}>
              Deku
            </Typography>
            <Grid item md={12} xs={12} alignItems="center">
              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <Avatar sx={{ mr: 2, bgcolor: "green" }} alt="Avatar" src="" />
                <Box
                  justifyContent="flex-start"
                  sx={{
                    bgcolor: "#42A5F5",
                    borderRadius: "30px",
                    padding: { md: "10px", xs: "20px" },
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
        <Grid container sx={{ pr: { md: 3, xs: 3 } }}>
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
                    padding: { md: "10px", xs: "20px" },
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
        <Grid container sx={{ pr: { md: 3, xs: 3 }, pt: 2 }}>
          <Grid
            item
            md={12}
            xs={12}
            sx={{ marginLeft: { md: "300px", xs: "0" } }}
            justifyContent="flex-start"
          >
            <AnimatedBox delay={2.5}>
              <Box sx={{ display: "flex" }}>
                <Avatar sx={{ mr: 2, bgcolor: "green" }} alt="Avatar" src="" />
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
      </Box>
    </Parallax>
  );
}
