import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import a from "../3.png";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

export default function Gateway() {
  return (
    <Parallax translateY={[-100]}>
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
            <motion.div whileInView={{ x: [0, 100, 0] }}>
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
            </motion.div>
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
    </Parallax>
  );
}
