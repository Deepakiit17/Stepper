import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import Paytm from "./Paytm";

export default function PaymentForm({ paymentData }) {
  const { teamSize } = paymentData;
  const teameMambers = teamSize;
  const deliveryCharge = 129;
  const registrationFee = 0;
  const TotalRegitrationFee = registrationFee * teameMambers;
  const totalAmount =
    teameMambers * deliveryCharge + registrationFee * teameMambers;

  useEffect(() => {
    paymentData.setTotleAmount(totalAmount);
  }, [totalAmount, paymentData]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment Details
      </Typography>
      <p style={{ fontSize: 15, lineHeight: 1.3, marginBottom: 25 }}>
        Every registered student will receive ILP membership and a selected ILP
        STEM game’s(Takshak battle field or Totoka smart city) level-1 Kit at
        your home, which is worth of 3500 INR.
      </p>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Typography variant="body">
            Total Team Member : <b>{teameMambers}</b>
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="body">
            Delivery Charges :{" "}
            <b>
              {teameMambers}*{deliveryCharge}
            </b>{" "}
            = <b>{teameMambers * deliveryCharge}</b> INR
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          {" "}
          <Typography variant="body">
            Total Registration Fee :{" "}
            <b>
              {teameMambers}*{registrationFee}
            </b>{" "}
            = <b>{TotalRegitrationFee}</b> INR{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          {" "}
          <Typography variant="body">
            Total Amount : <b>{totalAmount}</b>
          </Typography>
          <Paytm />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
