import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import '../App.css';


const HomeComponents: React.FC = () => {
  return (
    <section id="intro">
      <Grid className="text-center">
      <Typography variant="h3">
        <p style={{ fontFamily: "Comfortaa", color: "#999999" }}>My name is</p>
      </Typography>
      <Typography variant="h1" style={{ fontFamily: "Nunito", fontWeight: 600 }}>
        Donghyeok Tak
      </Typography>
    </Grid>
    </section>
  );
}

export default HomeComponents;
