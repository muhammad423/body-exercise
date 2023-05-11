import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarVideos = ({targetMuscles, equipmentData}) => {
  return (
    <Box sx={{mt: {lg:'100', xs: '0'}}}>
       <Typography sx={{fontSize: {md:'26px', xs:'20px'}, fontWeight: 'bold'}} mb={5} ml={3}>
          Exercises that target same muscles groups
       </Typography>
       <Stack sx={{p:'2px', position: 'relative'}}>
        {targetMuscles.length ? <HorizontalScrollbar data={targetMuscles}/>: <Loader />}
       </Stack>
       <Typography sx={{fontSize: {md:'26px', xs:'20px'}, fontWeight: 'bold'}} mb={5} ml={3}>
          Exercises that target same Equipment groups
       </Typography>
       <Stack sx={{p:'2px', position: 'relative'}}>
        {equipmentData.length ? <HorizontalScrollbar data={equipmentData}/>: <Loader />}
       </Stack>
    </Box>
  )
}

export default SimilarVideos
