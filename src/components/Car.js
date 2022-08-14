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
        <Stack direction="row" spacing={1}></Stack>

        <Chip label={"MPG: " + car.Miles_per_Gallon} />
        <Chip label={"Cylinders: " + car.Cylinders} />
        <Chip label={"Displacement: " + car.Displacement} />
        <Chip label={"Horsepower: " + car.Horsepower} />
        <Chip label={car.Weight_in_lbs + " lbs"} />
        <Chip label={"Acceleration:" + car.Acceleration} />
        <Chip label={"Year: " + car.Year} />
        <Chip label={"Origin: " + car.Origin} />
      </Container>
    </>
  );
};

export default Car;
