import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const Form = () => {
  const classes = useStyles();

  const [age, setAge] = React.useState("");

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel
              required
              id="demo-simple-select-label"
            >
              Gender
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Choose ILP STEM Game"
              fullWidth
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>
                Female
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contact"
            name="contact"
            label="Contact"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Form;
