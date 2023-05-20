import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import Step2Form from './Step2Form';

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


const API_URL = "http://15.206.189.238:8000/ilpapp2/Institute/club/registration";

const Step1Form = () => {
  const classes = useStyles();

  const [collegeData, setCollegeData] = useState({
    Institute_id: "",
    Institute_name: "",
    Institute_address: "",
    Institute_type: "",
    ilp_club_counsellor: {
      name: "",
      contact: "",
      email: "",
      gender: "",
      designation: "ilp_club_counsellor",
    },
    ilp_fauclty_coordinator: {
      name: "",
      contact: "",
      email: "",
      gender: "",
      designation: "ilp_fauclty_coordinator",
    },
    ilp_business_consultant: {
      name: "",
      contact: "",
      email: "",
      gender: "",
      designation: "ilp_business_consultant",
    },
  });

  const [clubId, setClubId] = useState(null);

  const [contactError, setContactError] = useState(false);


  console.log("collegeData", collegeData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCollegeData((prevInstitute) => ({
      ...prevInstitute,
      [name]: value,
    }));
  };

  const handleCounsellorChange = (e) => {
    const { name, value } = e.target;
    setCollegeData((prevInstitute) => ({
      ...prevInstitute,
      ilp_club_counsellor: {
        ...prevInstitute.ilp_club_counsellor,
        [name]: value,
      },
    }));
  };

  const handleCoordinatorChange = (e) => {
    const { name, value } = e.target;
    setCollegeData((prevInstitute) => ({
      ...prevInstitute,
      ilp_fauclty_coordinator: {
        ...prevInstitute.ilp_fauclty_coordinator,
        [name]: value,
      },
    }));
  };

  const handleConsultantChange = (e) => {
    const { name, value } = e.target;
    setCollegeData((prevInstitute) => ({
      ...prevInstitute,
      ilp_business_consultant: {
        ...prevInstitute.ilp_business_consultant,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(collegeData),
    };
    fetch(API_URL, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setClubId(result.club_id);
        handleResponse(result);
      })
      .catch((error) => console.log('error', error));
  };

  const handleResponse = (clubId) => {
    // pass the API response to the DisplayResponse component
    // you can do this by setting the prop value to the response state
    <Step2Form clubId={clubId} />
  };

  console.log("clubId", clubId);

  return (
    <React.Fragment>
      <Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
            Institute ID
          </Typography>
          <TextField
            required
            id="name"
            name="Institute_id"
            value={collegeData.Institute_id}
            onChange={handleChange}
            label="Institute ID"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
            Institute Name
          </Typography>
          <TextField
            required
            id="name"
            name="Institute_name"
            value={collegeData.Institute_name}
            onChange={handleChange}
            label="Institute Name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
            Institute Address
          </Typography>
          <TextField
            required
            multiline={true}
            rows={3}
            id="name"
            name="Institute_address"
            value={collegeData.Institute_address}
            onChange={handleChange}
            label="Institute Address"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
            Institute Type
          </Typography>
          <FormControl fullWidth>
            <InputLabel
              required
              id="demo-simple-select-label"
            >
              Institute Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="Institute_type"
              value={collegeData.Institute_type}
              onChange={handleChange}
              label="Choose ILP STEM Game"
              fullWidth
            >
              <MenuItem value={"School"}>
                School
              </MenuItem>
              <MenuItem value={"College"}>
                College
              </MenuItem>
              <MenuItem value={"Other"}>
                Other
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
          Student Club Counselor
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              label="Club Counselor Name"
              name="name"
              value={collegeData.ilp_club_counsellor.name}
              onChange={handleCounsellorChange}
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
                label="Club Counselor Gender"
                name="gender"
                value={collegeData.ilp_club_counsellor.gender}
                onChange={handleCounsellorChange}
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
              label="Club Counselor Contact"
              name="contact"
              value={collegeData.ilp_club_counsellor.contact}
              onChange={handleCounsellorChange}
              fullWidth
              autoComplete="family-name"
              variant="outlined"
              pattern="[0-9]{10}"
              InputProps={{
                inputProps: {
                  maxLength: 10,
                },
              }}
              helperText={
                contactError ? (
                  <Typography variant="body2" color="red">
                    Please enter a 10-digit phone number.
                  </Typography>
                ) : (
                  ""
                )
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              label="Club Counselor Email"
              name="email"
              value={collegeData.ilp_club_counsellor.email}
              onChange={handleCounsellorChange}
              fullWidth
              autoComplete="shipping address-line1"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
          Student Club Faculty Coordinator
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              label="Club Faculty Coordinator Name"
              name="name"
              value={collegeData.ilp_fauclty_coordinator.name}
              onChange={handleCoordinatorChange}
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
                label="Club Faculty Coordinator Gender"
                name="gender"
                value={collegeData.ilp_fauclty_coordinator.gender}
                onChange={handleCoordinatorChange}
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
              label="Club Faculty Coordinator Contact"
              name="contact"
              value={collegeData.ilp_fauclty_coordinator.contact}
              onChange={handleCoordinatorChange}
              fullWidth
              autoComplete="family-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              label="Club Faculty Coordinator Email"
              name="email"
              value={collegeData.ilp_fauclty_coordinator.email}
              onChange={handleCoordinatorChange}
              fullWidth
              autoComplete="shipping address-line1"
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
          ILP Business Consultant
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              label="ILP Business Consultant Name"
              name="name"
              value={collegeData.ilp_business_consultant.name}
              onChange={handleConsultantChange}
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
                label="ILP Business Consultant Gender"
                name="gender"
                value={collegeData.ilp_business_consultant.gender}
                onChange={handleConsultantChange}
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
              label="ILP Business Consultant Contact"
              name="contact"
              value={collegeData.ilp_business_consultant.contact}
              onChange={handleConsultantChange}
              fullWidth
              autoComplete="family-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              label="ILP Business Consultant Email"
              name="email"
              value={collegeData.ilp_business_consultant.email}
              onChange={handleConsultantChange}
              fullWidth
              autoComplete="shipping address-line1"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button type="submit" color="primary" variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </Grid>
      </Grid>
    </React.Fragment >
  );
}

export default Step1Form;
