import React, { useState } from 'react'
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExcersises from '../components/SearchExercises';

const Home = () => {

  const [bodyPart, setBodyPart] = useState('all');
  const [excercises, setExcercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExcersises 
        setExcercises={setExcercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises 
        setExcercises={setExcercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        />
    </Box>
  )
}

export default Home