import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay } from "@fortawesome/fontawesome-free-brands";
import logo from "../icon.png";

export default function Download() {
  return (
    <Box sx={{ mt: { md: 0, xs: 5 } }}>
      <Typography
        align="center"
        sx={{
          color: "#dad8d8",
          fontWeight: 700,
          fontSize: { md: "80px", xs: "50px" },
        }}
      >
        Get Deku Messaging
      </Typography>
      <Box align="center" sx={{ mb: { md: 10, xs: 5 } }}>
        <Button
          size="large"
          sx={{
            borderRadius: "30px",
            color: "#cdcecf",
            p: 2,
            m: 1,
            bgcolor: "#000",
          }}
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
          sx={{
            borderRadius: "30px",
            color: "#cdcecf",
            p: 2,
            m: 1,
            bgcolor: "#000",
          }}
          variant="contained"
        >
          {" "}
          <Box component="img" src={logo} sx={{ width: "18px", mr: 1 }} />
          Deku for Web
        </Button>
      </Box>
    </Box>
  );
}
