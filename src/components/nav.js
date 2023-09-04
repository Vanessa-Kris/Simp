import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import MediaQuery from "react-responsive";
import logo from "../icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <>
      {/* Desktop */}
      <MediaQuery minWidth={1224}>
        <Box sx={{ flexGrow: 1, mt: 7 }}>
          <AppBar
            className="nav"
            position="fixed"
            sx={{ bgcolor: "#fff", color: "#292929" }}
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
                  sx={{
                    borderRadius: "30px",
                    color: "#292929",
                    textDecorationLine: "underline",
                  }}
                >
                  Deku Web{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    style={{ padding: 5 }}
                    size="large"
                  />
                </Button>
                <Button
                  sx={{
                    ml: 2,
                    borderRadius: "30px",
                  }}
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

      {/* Mobile View */}
      <MediaQuery maxWidth={1224}>
        <AppBar position="static" sx={{ bgcolor: "#fff", color: "#292929" }}>
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
                position="fixed"
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
      {/*  */}
    </>
  );
}
