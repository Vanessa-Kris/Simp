import { Box, List, ListItem, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faGithub } from "@fortawesome/fontawesome-free-brands";
import {
  faMailBulk,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box component="footer">
      <Box
        sx={{
          p: 3,
          bgcolor: "#0a1320",
          color: "#E7E9EB",
        }}
        display="flex"
      >
        <Grid container>
          <Grid
            item
            md={3}
            xs={12}
            sx={{ px: { md: 4, xs: 2 }, pb: { md: 0, xs: 3 } }}
          >
            <Typography variant="h5" sx={{ pb: 2 }}>
              Deku Messaging
            </Typography>
            <Typography variant="body">SMS messaging app</Typography>
          </Grid>
          <Grid item md={3} xs={12} sx={{ p: 1 }}>
            <Typography variant="p" sx={{ pl: 2 }}>
              Links
            </Typography>
            <List sx={{ fontSize: "14px" }}>
              <ListItem>Features</ListItem>
              <ListItem>Developers</ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={12} sx={{ p: 1 }}>
            <Typography variant="h6" sx={{ pl: 2 }}>
              Get
            </Typography>
            <List>
              <ListItem>
                {" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ padding: 5 }}
                  size="large"
                />{" "}
                Deku Android
              </ListItem>
              <ListItem>
                {" "}
                <FontAwesomeIcon
                  icon={faGooglePlay}
                  style={{ padding: 5 }}
                  size="large"
                />
                Deku Web
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={12} sx={{ p: 1 }}>
            <Typography variant="h6" sx={{ pl: 2 }}>
              Contact
            </Typography>
            <List>
              <ListItem>
                {" "}
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ padding: 5 }}
                  size="large"
                />{" "}
                GitHub
              </ListItem>
              <ListItem>
                {" "}
                <FontAwesomeIcon
                  icon={faMailBulk}
                  style={{ padding: 5 }}
                  size="large"
                />{" "}
                Mail
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ py: 3, bgcolor: "#000" }}>
        <Typography align="center" sx={{ color: "#E7E9EB" }}>
          &copy; Deku Deku {currentYear}
        </Typography>
      </Box>
    </Box>
  );
}
