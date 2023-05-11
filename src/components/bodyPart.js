import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/icon.png.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack
    type = 'button'
     alignItems='center'
     justifyContent='center'
     className='bodyPart-card'
     sx={{
        borderTop:'4px solid #FF2625',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '20px'
     }}
     onclick = {() =>{
      setBodyPart(item)
      window.scrollTo({top:1800, left:100, behavior:'smooth'})
    }}
    >
     <img src={Icon} alt='dumbbell' style={{width:'70px', height: '70px'}} />
     <Typography fontSize='20px' fontWeight='bold' color='3A1212' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart