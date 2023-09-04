import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay } from "@fortawesome/fontawesome-free-brands";
import logo from "../icon.png";

export default function Download() {
  return (
    <Box sx={{ mt: { md: 0, xs: 5 } }} className="download">
      <Typography
        align="center"
        sx={{
          color: "#292929",
          fontWeight: 700,
          fontSize: { md: "50px", xs: "40px" },
        }}
      >
        Get Deku Messaging
      </Typography>
      <Box align="center" sx={{ mb: { md: 10, xs: 5 } }}>
        <Button
          size="large"
          className="btn-play"
          variant="contained"
          sx={{
            borderRadius: "30px",
            p: 2,
            m: 1,
            color: "#fff",
          }}
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
          className="btn-deku"
          variant="contained"
          sx={{
            borderRadius: "30px",
            color: "#fff",
            p: 2,
            m: 1,
          }}
        >
          {" "}
          <Box component="img" src={logo} sx={{ width: "18px", mr: 1 }} />
          Deku for Web
        </Button>
      </Box>
    </Box>
  );
}
