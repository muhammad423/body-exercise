import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import {
  FetchData,
  ExercisesOption,
} from "../../src/components/utils/FetchData";
import Detail from "../components/Detail";
import SimilarVideos from "../components/SimilarVideos";

const ExerciseDetails = () => {
  const [details, setDetails] = useState({});
  const [targetMuscles, setTargetMuscles] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      
      const exerciseDetailData = await FetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        ExercisesOption
      );
      setDetails(exerciseDetailData);
      const targetMusclesData = await FetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        ExercisesOption
      );
      setTargetMuscles(targetMusclesData);

      const equipmentMusclesData = await FetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        ExercisesOption
      );
      setEquipmentData(equipmentMusclesData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail details={details} />
      <SimilarVideos
        targetMuscles={targetMuscles}
        equipmentData={equipmentData}
      />
    </Box>
  );
};

export default ExerciseDetails;
