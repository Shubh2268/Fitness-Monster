import React, { useEffect, useState } from 'react';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import { useParams } from 'react-router-dom';

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseUrl = 'https://exercisedb.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);


      const targetMuscleExercisesData = await fetchData(`${exerciseUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(`${exerciseUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if(!exerciseDetail) {
    return <div>No Data</div>
  }

  return (
    <div>
      <Detail exerciseDetail={exerciseDetail} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </div>
  )
}

export default ExerciseDetail;
