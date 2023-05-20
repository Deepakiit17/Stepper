import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

function AddTeamMember({ no, key, setMamber_1, mamber_1, handleNext}) {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
        Team member Details NO.{no}
      </Typography>
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
            onChange={(e) => setMamber_1({ ...mamber_1, name: e.target.value })}
          />
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
            value={mamber_1.contact}
            onClick={handleNext}
            onChange={(e) => {
              const input = e.target.value.replace(/[^0-9]/g, '');
              if (/^\d{0,10}$/.test(input)) {
                setMamber_1({ ...mamber_1, contact: input });
              }
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            onChange={(e) => setMamber_1({ ...mamber_1, email: e.target.value })}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default AddTeamMember;
