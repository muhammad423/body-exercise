import React, {useContext} from 'react'
import { Box, Typography, } from '@mui/material'
import { ScrollMenu, VisibilityContext,} from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'
import BodyPart from './bodyPart'
import ExerciseCard from './ExerciseCard'


import RightArrowIcon from '../assets/icons/rightArrow.png.png'
import LeftArrowIcon from '../assets/icons/leftArrow.png.png'


function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      useContext(VisibilityContext);
  
    return (
      <Typography disabled={isFirstItemVisible} onClick={() => scrollPrev()} className='left-arrow'>
      <img src={LeftArrowIcon}  alt='gym'/>
      </Typography>
    );
  }
  
  function RightArrow() {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography disabled={isLastItemVisible} onClick={() => scrollNext()} className='right-arrow'>
        <img src={RightArrowIcon} alt='imgIcon'/>
      </Typography>
    );
  }

const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyPart}) => {
    console.log(data)
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) =>(
        <Box
         key={item.id||item}
         itemId={item.id||item}
         title={item.id||item}
         m= '0 40px'
         >
        { isBodyPart ? <BodyPart 
         item={item} 
         bodyPart={bodyPart}
         setBodyPart={setBodyPart}
         />
         :
         <ExerciseCard exercise={item}/>
        }
        </Box>
        
        )
        )}
    </ScrollMenu>
  )
}


export default HorizontalScrollbar