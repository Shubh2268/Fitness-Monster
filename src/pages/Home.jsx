import React, { useState } from 'react';
import FrontBanner from '../components/FrontBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {

  const [exercises, setExercises] = useState([]);
  const [bodypart, setBodyPart] = useState('all');

  return (
    <div name='home'>
      <FrontBanner />
      <SearchExercises setExercises={setExercises} bodypart={bodypart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodypart} />
    </div>
  )
}

export default Home;
