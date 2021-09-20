import {
  CardContent,
  Container,
  Grid,
  Card,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Country.css";
import Table from "./Table";
const Country = ({ country }) => {
  const [vaccineCountry, setVaccineCountry] = useState("");
  const [timelines, setTimeLines] = useState({});
  const onChangeCountry = async (e) => {
    const changeName = e.target.value;
    console.log(changeName);
    const url = `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${changeName}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setVaccineCountry(data.country);
        setTimeLines(data.timeline);
      });
  };
  console.log(`see the vaccine`, vaccineCountry);

  return (
    <div className="country">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Card className="country__card">
              <CardContent className="country__cardContent">
                <Typography>Select a country</Typography>
                <FormControl>
                  <Select variant="outlined" onChange={onChangeCountry}>
                    <MenuItem value="select">Select</MenuItem>
                    {country.map((country) => (
                      <MenuItem value={country.country}>
                        {country?.country}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Table name={vaccineCountry} timelines={timelines} />
    </div>
  );
};

export default Country;
