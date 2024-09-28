import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          mt: 5,
          mb: 10,
          p: 2,
          textAlign: "center",
          "& h4": {
            fontWeight: "bold", 
            marginTop:"-20px"
          },
          "& p": {
            textAlign: "justify",
            mt: 1,
          }, 
          "@media(max-width:600px)":{
            "& h4": {
            marginTop:"-30px",
          },
          }
        }}
      >
        <Typography variant="h4">About Us</Typography>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem, asperiores. Aperiam soluta, expedita ducimus ea
          excepturi eaque blanditiis id ex! Doloribus dignissimos mollitia
          tempora tenetur illum neque! Velit cupiditate, voluptatibus vel
          delectus autem quam dignissimos odit facilis omnis nobis. Pariatur
          reiciendis ullam consectetur quas accusamus deleniti error laudantium
          modi suscipit veritatis, ab, tempore exercitationem doloremque
          recusandae. Temporibus dolore officiis corporis enim molestias,
          nesciunt itaque velit placeat rem laudantium quos nulla ab saepe rerum
          veritatis. Minima perferendis velit rem. Assumenda ipsa molestiae sit
          eligendi facilis ab veniam aspernatur minus neque beatae odit
          accusantium inventore ex deleniti asperiores rerum dolor, nisi est!
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id placeat
          similique, eos, excepturi laboriosam quidem corrupti rem ex voluptate
          praesentium, itaque facere natus. Repellendus similique aspernatur
          odio tenetur dolorum porro! Corporis minima autem sit sed! Harum,
          repudiandae. Nesciunt exercitationem temporibus modi sed velit
          laboriosam? Aliquid et alias tenetur exercitationem adipisci molestiae
          numquam in unde dolorem dicta vero explicabo earum eligendi nam atque
          ullam deserunt repellat repudiandae, provident rem iusto, accusamus
          fuga cupiditate. Quos, consectetur nemo deserunt ullam libero,
          voluptatibus voluptatum inventore eius veniam earum officiis eos
          omnis, facere sunt adipisci minima provident assumenda sequi. Omnis
          nisi aspernatur nemo quos placeat.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id placeat
          similique, eos, excepturi laboriosam quidem corrupti rem ex voluptate
          praesentium, itaque facere natus. Repellendus similique aspernatur
          odio tenetur dolorum porro! Corporis minima autem sit sed! Harum,
          repudiandae. Nesciunt exercitationem temporibus modi sed velit
          laboriosam? Aliquid et alias tenetur exercitationem adipisci molestiae
          numquam in unde dolorem dicta vero explicabo earum eligendi nam atque
          ullam deserunt repellat repudiandae, provident rem iusto, accusamus
          fuga cupiditate. Quos, consectetur nemo deserunt ullam libero,
          voluptatibus voluptatum inventore eius veniam earum officiis eos
          omnis, facere sunt adipisci minima provident assumenda sequi. Omnis
          nisi aspernatur nemo quos placeat.
        </p> 
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id placeat
          similique, eos, excepturi laboriosam quidem corrupti rem ex voluptate
          praesentium, itaque facere natus. Repellendus similique aspernatur
          odio tenetur dolorum porro! Corporis minima autem sit sed! Harum,
          repudiandae. Nesciunt exercitationem temporibus modi sed velit
          laboriosam? Aliquid et alias tenetur exercitationem adipisci molestiae
          numquam in unde dolorem dicta vero explicabo earum eligendi nam atque
          ullam deserunt repellat repudiandae, provident rem iusto, accusamus
          fuga cupiditate. Quos, consectetur nemo deserunt ullam libero,
          voluptatibus voluptatum inventore eius veniam earum officiis eos
          omnis, facere sunt adipisci minima provident assumenda sequi. Omnis
          nisi aspernatur nemo quos placeat.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
