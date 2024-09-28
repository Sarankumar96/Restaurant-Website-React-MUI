import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 2 }}
      >
        <Box
          sx={{
            my: 1,
            "& svg": {
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon sx={{ color: "white" }} />
          <XIcon />
          <GitHubIcon />
          <LinkedInIcon />
        </Box>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            color: "white",
            "@media (max-width:600px)": { fontSize: "1rem" },
          }}
        >
          All Rights Reserved © Clever Programmers
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
