import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box component="footer">
      <Box></Box>
      <Box sx={{ py: 3, bgcolor: "#0F1C23" }}>
        <Typography align="center" sx={{ color: "#E7E9EB" }}>
          Deku 2023
        </Typography>
      </Box>
    </Box>
  );
}
