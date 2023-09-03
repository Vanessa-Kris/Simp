import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import MediaQuery from "react-responsive";

export default function Features() {
  return (
    <>
      <MediaQuery minWidth={1224}>
        <Box>
          <Typography
            sx={{ color: "#fff", fontWeight: 700, mt: 5 }}
            variant="h2"
            align="center"
          >
            Features
          </Typography>
          <Grid
            container
            columnSpacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ py: 5, px: 15, color: "#fff" }}
          >
            <Grid item md={6} sx={{ mb: 4 }}>
              <Box
                component="img"
                sx={{
                  width: "500px",
                  borderRadius: "30px",
                }}
                src="https://img.freepik.com/free-vector/security-concept-illustration-people-holding-chain_53876-43028.jpg?size=626&ext=jpg"
              ></Box>
            </Grid>
            <Grid item md={6} sx={{ mb: 4 }}>
              <Typography variant="h5"> End-to-End Encryption</Typography>
              <Typography>
                With Deku Messaging all your messages are completely secure,
                ensuring utmost privacy. Neither third parties nor we can access
                or read your messages. Deku SMS messaging prioritizes your
                privacy above all else.
              </Typography>
            </Grid>
            {/*  */}

            <Grid item md={6} sx={{ mb: 4 }}>
              <Typography variant="h5"> Data Protection</Typography>
              <Typography>
                With robust encryption and strict access controls, we ensure
                that your data remains safe and confidential. You can use Deku
                Messaging App with confidence, knowing that your personal
                information and messages are shielded from unauthorized access.
              </Typography>
            </Grid>
            <Grid item md={6} sx={{ mb: 4 }}>
              <Box
                component="img"
                sx={{ width: "400px", borderRadius: "30px" }}
                src="https://img.freepik.com/free-vector/information-privacy-concept-illustration_335657-5489.jpg?size=626&ext=jpg"
              ></Box>
            </Grid>
            <Grid item md={6} sx={{ mb: 4 }}>
              <Box
                component="img"
                sx={{ width: "450px", borderRadius: "30px" }}
                src="https://img.freepik.com/free-vector/image-upload-concept-illustration_114360-996.jpg?size=626&ext=jpg"
              ></Box>
            </Grid>
            <Grid item md={6} sx={{ mb: 4 }}>
              <Typography variant="h5"> Send Images Using SMS</Typography>
              <Typography>
                Deku Messaging App allows you to send images using SMS! We've
                enhanced your messaging experience by enabling you to share not
                only text but also images effortlessly. This new feature makes
                communication even more engaging and expressive.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </MediaQuery>

      {/* Mobile View */}
      <MediaQuery maxWidth={1224}>
        <Box>
          <Typography
            sx={{ color: "#fff", fontWeight: 700, mt: 5 }}
            variant="h3"
            align="center"
          >
            Features
          </Typography>
          <Grid container sx={{ p: 5 }}>
            <Grid item md={6} xs={12}>
              <Box
                component="img"
                src="https://img.freepik.com/free-vector/security-concept-illustration-people-holding-chain_53876-43028.jpg?size=626&ext=jpg"
              ></Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5"> End-to-End Encryption</Typography>
              <Typography>
                With Deku Messaging all your messages are completely secure,
                ensuring utmost privacy. Neither third parties nor we can access
                or read your messages. Deku SMS messaging prioritizes your
                privacy above all else.
              </Typography>
            </Grid>
            {/*  */}
            <Grid item xs={12}>
              <Box
                component="img"
                src="https://img.freepik.com/free-vector/information-privacy-concept-illustration_335657-5489.jpg?size=626&ext=jpg"
              ></Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5"> Data Protection</Typography>
              <Typography>
                With robust encryption and strict access controls, we ensure
                that your data remains safe and confidential. You can use Deku
                Messaging App with confidence, knowing that your personal
                information and messages are shielded from unauthorized access.
              </Typography>
            </Grid>

            {/* https://img.freepik.com/free-photo/woman-holding-padlock-laptop_53876-75178.jpg?size=626&ext=jpg  */}
            <Grid item xs={12}>
              <Box
                component="img"
                src="https://img.freepik.com/free-vector/image-upload-concept-illustration_114360-996.jpg?size=626&ext=jpg"
              ></Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5"> Send Images Using SMS</Typography>
              <Typography>
                Deku Messaging App allows you to send images using SMS! We've
                enhanced your messaging experience by enabling you to share not
                only text but also images effortlessly. This new feature makes
                communication even more engaging and expressive.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </MediaQuery>
    </>
  );
}
