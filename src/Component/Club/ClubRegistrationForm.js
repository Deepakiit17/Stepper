import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function  RegistrationForm({ registrationData }) {
  const [age, setAge] = React.useState("");
  const {
    teamName,
    teamName_err,
    idea,
    ideaDiscription,
    name,
    name_err,
    contact,
    contact_err,
    email,
  
    setTeamName,
    setTeamName_err,
    setProject,
    setIdea,
    setIdeaDiscription,
    setName,
    setName_err,
    setContact,
    setContact_err,
    setEmail,
    setEmail_err,
  } = registrationData;
  // console.log(
  //   "teamName_err,name_err,contact_err,email_err",
  //   teamName_err,
  //   name_err,
  //   contact_err,
  //   email_err
  // );
  const handleChange = (event) => {
    setAge(event.target.value);
    setProject(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Team Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={teamName_err}
            id="teamName"
            name="teamName"
            label="Team Name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            helperText={
              teamName_err ? "Team name must be at least 5 characters long" : ""
            }
            value={teamName}
            onChange={(e) => {
              setTeamName(e.target.value);
              setTeamName_err(false);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Choose ILP STEM Game
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Choose ILP STEM Game"
              fullWidth
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={"Totoka Smart City"}>Totoka Smart City</MenuItem>
              <MenuItem value={"Takshak Battle Field"}>
                Takshak Battle Field
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="stemProjectIdea"
            name="stemProjectIdea"
            label="STEM Project Idea"
            multiline={true}
            rows={2}
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="idea"
            multiline={true}
            rows={3}
            name="idea"
            label="Idea Discription"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            value={ideaDiscription}
            onChange={(e) => setIdeaDiscription(e.target.value)}
          />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom></Typography>
      <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
        Team Captain
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={name_err}
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            helperText={
              name_err ? "Your name must be at least 3 characters long" : ""
            }
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setName_err(false);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={contact_err}
            id="contact"
            name="contact"
            label="Contact"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            helperText={
              contact_err
                ? "Please enter a 10-digit phone number (numbers only)"
                : ""
            }
            InputProps={{
              inputProps: {
                maxLength: 10,
              },
            }}
            value={contact}
            onChange={(e) => {
              setContact(e.target.value.replace(/[^0-9]/g, ""));
              setContact_err(false);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            // error={email_err}
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            // helperText={email_err ? "Please enter a valid email address" : ""}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmail_err(false);
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
