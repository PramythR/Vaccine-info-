import React from "react";
import "./Details.css";
import { useLocation, useParams } from "react-router-dom";
import { Card, CardContent, Container, Typography } from "@material-ui/core";

const Details = () => {
  // const { candidate } = useParams();
  const location = useLocation();
  // console.log(`pxxxxxxx`, location.state.data);
  const details = location.state.data;
  const names = location.state.name;
  return (
    <div className="details">
      <Container maxWidth="lg">
        <Card className="details__cards">
          <CardContent>
            <Typography align="left" variant="h4" gutterBottom>
              🚀{names}🚀{" "}
            </Typography>
            <Typography
              align="left"
              paragraph
              color="textPrimary"
              variant="body1"
            >
              {details}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Details;
