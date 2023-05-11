import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/images/waist.png.png'
import TargetImage from '../assets/images/abs.png.png'
import EquipmentImage from '../assets/images/weightt.png.png'

const Detail = ({details}) => {
    const {gifUrl, bodyPart, name, target, equipment} = details
     const extraDetails =[
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name:target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
     ]
  return (
    <Stack gap='60px' sx={{flexDirection:{lg: 'row'}, p:'20px', alignItems: 'center'}}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
      <Stack sx={{gap:{lg: '35px', xs: '20px'}}}>
        <Typography variant='h3' fontWeight='bold' textTransform='capitalize'>
            {name}
        </Typography>
        <Typography variant='h6'>
            Exercises Keep You Strong {name} {' '} is one of the best exercises to target your {target}.
            It will help you improve your mood and gain energy.
        </Typography>
        {extraDetails.map((item)=>(
         <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
            <Button sx={{background: '#fff2bd', borderRadius: '50px', width: '100px', height: '100px'}}>
                <img src={item.icon} alt={name}  style={{width:'50px', height: '50px'}}/>
            </Button>
            <Typography variant='h5'>
                {item.name}
            </Typography>
         </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail
