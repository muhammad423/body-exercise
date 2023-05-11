import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
const Footer = () => {
  return (
    <Box mt='80px' bgcolor='black'>
      <Stack alignItems='center' justifyContent='center' px='40px' py='20px'>
        <Typography color='white' textAlign='center'>
          Copyright ! 2023  Made By <span style={{ color: '#ff2625' }}>Muhammad Israr</span>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
