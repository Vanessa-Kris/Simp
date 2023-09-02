import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import MediaQuery from "react-responsive";
import logo from "../icon.png";

export default function Nav() {
  return (
    <>
      {/* Desktop */}
      <MediaQuery minWidth={1224}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            fixedTop
            sx={{ bgcolor: "#000", color: "#fff" }}
          >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <img
                  src={logo}
                  width="30px"
                  alt="Deku Icon"
                  style={{ marginRight: 10 }}
                />
                <span edge="start">Deku Messaging</span>
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  sx={{ borderRadius: "30px", color: "#cdcecf" }}
                >
                  Deku Web
                </Button>
                <Button
                  sx={{ ml: 2, borderRadius: "30px", color: "#cdcecf" }}
                  variant="outlined"
                  href="https://stunnersgalleria.com"
                >
                  Download for Android
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </MediaQuery>

      {/* Mobile View */}
      <MediaQuery maxWidth={1224}>
        <AppBar position="static" sx={{ bgcolor: "#000", color: "#fff" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <img
                src={logo}
                width="30px"
                alt="Deku Icon"
                style={{ marginRight: 10 }}
              />
              <span edge="start">Deku</span>
            </Box>
            <Box sx={{ ms: "auto" }}>
              <Button
                size="small"
                sx={{ borderRadius: "30px", color: "#cdcecf" }}
                variant="outlined"
              >
                Download for Android
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </MediaQuery>
      {/*  */}
    </>
  );
}
