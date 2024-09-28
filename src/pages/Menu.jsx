import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { MenuList } from "../data/data.js";

const Menu = () => { 
  const handleClickOrder = (itemName)=>{
    alert(`Order Successful, ${itemName}`)
  }
  return (
    <Layout>
      <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
        {MenuList.map((item) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography sx={{textAlign:"center"}} variant="h5" gutterBottom component={"div"}>
                  {item.name}
                </Typography>
                <Typography variant="body2">{item.Description}</Typography> 
                <Typography variant="h6" align="center">{item.price}</Typography>   
                <Box sx={{textAlign:"center"}} >
                <Button variant="contained" sx={{backgroundColor:"goldenrod"}} onClick={()=>handleClickOrder(item.name)}>Order Now</Button>
                </Box>
                
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
