import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import styles from "../assets/jss/material-kit-react/views/landingPage";
import '../App.css';

import HomeComponents from "../components/HomeComponents"

const useStyles = makeStyles(styles);

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <HomeComponents></HomeComponents>
        </div>
      </div>
  );
};

export default HomePage;
