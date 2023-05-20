import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

function ShippingAddress(props) {
  const {
    setAddress,
    setState,
    setPinCode,
    address,
    state,
    pinCode,
    address_err,
    state_err,
    pinCode_err,
    setAddress_err,
    setState_err,
    setPinCode_err,
  } = props.addressData;
  // console.log("props", props);
  return (
    <React.Fragment>
      <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
        ILP STEM Kit Delevery Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            error={address_err}
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            helperText={
              address_err
                ? "Your address must be at least 10 characters long"
                : ""
            }
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setAddress_err(false);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            error={state_err}
            id="state"
            name="state"
            label="State"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            helperText={
              state_err ? "Your state must be at least 4 characters long" : ""
            }
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              setState_err(false);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            error={pinCode_err}
            id="zipCode"
            name="zipCode"
            label="Zip / Postal / Pin code "
            fullWidth
            autoComplete="Zip / Postal code"
            variant="outlined"
            helperText={
              pinCode_err
                ? "Please enter a 6-digit pin number (numbers only)"
                : ""
            }
            InputProps={{
              inputProps: {
                maxLength: 6,
              },
            }}
            value={pinCode}
            onChange={(e) => {
              setPinCode(e.target.value.replace(/[^0-9]/g, ""));
              setPinCode_err(false);
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ShippingAddress;
