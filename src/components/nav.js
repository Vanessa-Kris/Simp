import { AppBar, Box, Button, Typography, Toolbar } from "@mui/material";
import React from "react";
import MediaQuery from "react-responsive";

export default function Nav() {
  return (
    <>
      <MediaQuery minWidth={1224}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ bgcolor: "background.text.primary" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography edge="start" sx={{ mr: 2 }}>
                Deku Messaging
              </Typography>
              <Box>
                <Button variant="contained" sx={{ borderRadius: "30px" }}>
                  Deku Web
                </Button>
                <Button
                  sx={{ ml: 2, borderRadius: "30px" }}
                  variant="contained"
                  href="https://stunnersgalleria.com"
                >
                  Download for Android
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </MediaQuery>

      <MediaQuery maxWidth={1224}>
        <AppBar position="static" sx={{ bgcolor: "background.text.primary" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Deku</Typography>
            <Box sx={{ ms: "auto" }}>
              <Button
                size="small"
                sx={{ borderRadius: "30px" }}
                variant="contained"
              >
                Download for Android
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </MediaQuery>
    </>
  );
}
