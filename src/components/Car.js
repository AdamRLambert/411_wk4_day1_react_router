import React from "react";
import cars from "../cars.json";

import { useParams } from "react-router-dom";

// Container, Paper, Chip //
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Car = (props) => {
  const params = useParams();
  const car = cars.find((car) => Number(params.id) === Number(car.id));

  console.log("params", car);
  return (
    <>
      <Container maxWidth="sm">
        <h1>{car.Name}</h1>
      </Container>
    </>
  );
};

export default Car;
