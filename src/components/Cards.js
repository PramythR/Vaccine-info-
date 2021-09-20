import React from "react";
import "./Cards.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const Cards = ({ vaccines }) => {
  const classes = useStyles();
  return (
    <div className="table">
      <div className={classes.root}>
        <Container maxWidth="lg" className="cards__container">
          <Grid container spacing={3}>
            {vaccines.map((vaccine) => (
              <Grid item xs={12} sm={6}>
                <Card className="cards">
                  <CardContent className="">
                    <Typography component="h5" variant="h5">
                      😷
                      {vaccine.candidate}
                    </Typography>
                    <Typography variant="subtitle1" color="">
                      🧬 Mechanism:{vaccine.mechanism}
                    </Typography>
                    <Typography variant="subtitle1" color="">
                      🧬 Institutions:{vaccine.institutions}
                    </Typography>
                    <Typography variant="subtitle1" color="">
                      🌟 Sponsors:{vaccine.sponsors}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      🧬 TrialPhase:{vaccine.trialPhase}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      className="card__button"
                      key={vaccine.candidate}
                    >
                      <Link
                        className="cards__link"
                        to={{
                          pathname: `/details/${vaccine.candidate}`,
                          state: {
                            data: vaccine.details,
                            name: vaccine.candidate,
                          },
                        }}
                      >
                        Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Cards;
