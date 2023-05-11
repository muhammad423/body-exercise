import React from "react";
import { Box, Typography, Button } from "@mui/material";
import BannerImage from '../assets/images/bannerImage.jpeg'

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { sm: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px', sm:'40px'}}}>
       Sweat, Smile <br/> and Repeat.
      </Typography>
      <Typography  fontSize="20px" lineHeight='35px' mb={3}>
        Check Out The Most Effective Exercises.
      </Typography>
      <Button variant="contained" color="error">EXPLORE EXERCISES</Button>
      <Typography 
      fontWeight={600}
      color='#ff2625'
      sx={{opacity: 0.1, display:{lg:'block', xs:'none'}, letterSpacing:'20px'}}
      fontSize='200px'
      ml='90px'>
        Exercise
      </Typography>
      <img src={BannerImage} alt='heroBanner' className="hero-banner-img"/>
    </Box>
  );
};

export default HeroBanner;
