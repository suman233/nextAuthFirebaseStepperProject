import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

import React from "react";

const Footer = () => {
  return (
    <Container>
      <Grid container spacing={4} my={5}>
        <Grid size={{xs:12, sm:6, md:4}} sx={{textAlign:'center'}}>Demo Website</Grid>
        <Grid size={{xs:12, sm:6, md:4}} textAlign={'center'}>Copyright Reserved.</Grid>
        <Grid size={{xs:12, sm:6, md:4}} textAlign={'center'}>Designed by SK</Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
