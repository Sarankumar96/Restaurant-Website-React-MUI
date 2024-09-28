import React from "react";
import Layout from "../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import StoreIcon from "@mui/icons-material/Store";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4">Contact Us</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, hic
          repudiandae velit animi qui vero in, magni quidem enim nisi tempora
          ipsum eius laudantium, assumenda molestiae optio suscipit debitis
          adipisci!
        </p>
      </Box>
      <Box 
        sx={{
          mb: 12,
          width: "100%",
          display: "flex",
          justifyContent: "space-around",  
          "@media (max-width:600px)":{
            width:"300px"
          }   
         
        }}
      >
        <TableContainer component={Paper} sx={{width:"45%"}}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon
                    sx={{ color: "red", pt: 1, fontSize: "24px" }}
                  />
                  18001234(Toll Free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon
                    sx={{ color: "skyblue", pt: 1, fontSize: "24px" }}
                  />
                  supportdawaat@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1, fontSize: "24px" }} />
                  9876543210
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <StoreIcon sx={{ color: "green", pt: 1, fontSize: "24px" }} />
                  Near Singh Sabha Gurudwara, Rajpura, Punjab
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13754.491591530083!2d76.57121635349804!3d30.4751175447683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fdc77a3395a69%3A0xae54f3c33211e734!2sKendri%20Gurdwara%20Shri%20Singh%20Sabha%20Rajpura!5e0!3m2!1sen!2sin!4v1727017103050!5m2!1sen!2sin"
          width="750"
          height="450"
          style={{ border: "0", textAlign: "right", marginRight:"20px"}}
          allowfullscreen=""px
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Layout>
  );
};

export default Contact;
