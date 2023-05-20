import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import Form from './Form';

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

const Step2Form = ({ clubId }) => {
    const classes = useStyles();

    console.log("clubId", clubId);

    const [age, setAge] = React.useState("");

    // const [clubId, setClubId] = useState('');
    const [chairmanName, setChairmanName] = useState('');
    const [chairmanContact, setChairmanContact] = useState('');
    const [chairmanEmail, setChairmanEmail] = useState('');
    const [chairmanGender, setChairmanGender] = useState('');
    const [treasurerName, setTreasurerName] = useState('');
    const [treasurerContact, setTreasurerContact] = useState('');
    const [treasurerEmail, setTreasurerEmail] = useState('');
    const [treasurerGender, setTreasurerGender] = useState('');
    const [viceChairmanName, setViceChairmanName] = useState('');
    const [viceChairmanContact, setViceChairmanContact] = useState('');
    const [viceChairmanEmail, setViceChairmanEmail] = useState('');
    const [viceChairmanGender, setViceChairmanGender] = useState('');
    const [secretaryName, setSecretaryName] = useState('');
    const [secretaryContact, setSecretaryContact] = useState('');
    const [secretaryEmail, setSecretaryEmail] = useState('');
    const [secretaryGender, setSecretaryGender] = useState('');
    const [stemMentorName, setStemMentorName] = useState('');
    const [stemMentorContact, setStemMentorContact] = useState('');
    const [stemMentorEmail, setStemMentorEmail] = useState('');
    const [stemMentorGender, setStemMentorGender] = useState('');
    const [membershipExecutiveName, setMembershipExecutiveName] = useState('');
    const [membershipExecutiveContact, setMembershipExecutiveContact] = useState('');
    const [membershipExecutiveEmail, setMembershipExecutiveEmail] = useState('');
    const [membershipExecutiveGender, setMembershipExecutiveGender] = useState('');
    const [labExecutiveName, setLabExecutiveName] = useState('');
    const [labExecutiveContact, setLabExecutiveContact] = useState('');
    const [labExecutiveEmail, setLabExecutiveEmail] = useState('');
    const [labExecutiveGender, setLabExecutiveGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        var token = localStorage.getItem("token");
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                club_id: clubId,
                chairman: {
                    name: chairmanName,
                    contact: chairmanContact,
                    email: chairmanEmail,
                    gender: chairmanGender,
                    designation: "chairman",
                },
                'treasurer': {
                    'name': treasurerName,
                    'contact': treasurerContact,
                    'email': treasurerEmail,
                    'gender': treasurerGender,
                    'designation': 'treasurer'
                },
                'vice_chairman': {
                    'name': viceChairmanName,
                    'contact': viceChairmanContact,
                    'email': viceChairmanEmail,
                    'gender': viceChairmanGender,
                    'designation': 'vice_chairman'
                },
                "secretary": {
                    "name": secretaryName,
                    "contact": secretaryContact,
                    "email": secretaryEmail,
                    "gender": secretaryGender,
                    "designation": "secretary"
                },
                "stem_mentor": {
                    "name": stemMentorName,
                    "contact": stemMentorContact,
                    "email": stemMentorEmail,
                    "gender": stemMentorGender,
                    "designation": "stem_mentor"
                },
                "membership_executive": {
                    "name": membershipExecutiveName,
                    "contact": membershipExecutiveContact,
                    "email": membershipExecutiveEmail,
                    "gender": membershipExecutiveGender,
                    "designation": "membership_executive"
                },
                "lab_executive": {
                    "name": labExecutiveName,
                    "contact": labExecutiveContact,
                    "email": labExecutiveEmail,
                    "gender": labExecutiveGender,
                    "designation": "lab_executive"
                }
                // similarly add other fields
            }),
            redirect: "follow",
        };
        fetch(
            "http://15.206.189.238:8000/ilpapp2/Institute/Executive_admin/registration",
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    };

    return (
        <React.Fragment>

            <Typography variant="h6" gutterBottom></Typography>
            <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
                Chairmain
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        value={chairmanName}
                        onChange={(e) => setChairmanName(e.target.value)}
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
                            value={chairmanGender}
                            onChange={(e) => setChairmanGender(e.target.value)}
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
                        value={chairmanContact}
                        onChange={(e) => setChairmanContact(e.target.value)}
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
                        value={chairmanEmail}
                        onChange={(e) => setChairmanEmail(e.target.value)}
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="class/semester"
                        name="class/semester"
                        label="Class/Semester"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom></Typography>
            <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
                Vice Chairmain
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        value={viceChairmanName}
                        onChange={(e) => setViceChairmanName(e.target.value)}
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
                            value={viceChairmanGender}
                            onChange={(e) => setViceChairmanGender(e.target.value)}
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
                        value={viceChairmanContact}
                        onChange={(e) => setViceChairmanContact(e.target.value)}
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
                        value={viceChairmanEmail}
                        onChange={(e) => setViceChairmanEmail(e.target.value)}
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="class/semester"
                        name="class/semester"
                        label="Class/Semester"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom></Typography>
            <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
                Stem Mentor
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        value={stemMentorName}
                        onChange={(e) => setStemMentorName(e.target.value)}
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
                            value={stemMentorGender}
                            onChange={(e) => setStemMentorGender(e.target.value)}
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
                        value={stemMentorContact}
                        onChange={(e) => setStemMentorContact(e.target.value)}
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
                        value={stemMentorEmail}
                        onChange={(e) => setStemMentorEmail(e.target.value)}
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="class/semester"
                        name="class/semester"
                        label="Class/Semester"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom></Typography>
            <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
                Membership Excutive
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        value={membershipExecutiveName}
                        onChange={(e) => setMembershipExecutiveName(e.target.value)}
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
                            value={membershipExecutiveGender}
                            onChange={(e) => setMembershipExecutiveGender(e.target.value)}
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
                        value={membershipExecutiveContact}
                        onChange={(e) => setMembershipExecutiveContact(e.target.value)}
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
                        value={membershipExecutiveEmail}
                        onChange={(e) => setMembershipExecutiveEmail(e.target.value)}
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="class/semester"
                        name="class/semester"
                        label="Class/Semester"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom></Typography>
            <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
                Lab Excutive
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        value={labExecutiveName}
                        onChange={(e) => setLabExecutiveName(e.target.value)}
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
                            value={labExecutiveGender}
                            onChange={(e) => setLabExecutiveGender(e.target.value)}
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
                        value={labExecutiveContact}
                        onChange={(e) => setLabExecutiveContact(e.target.value)}
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
                        value={labExecutiveEmail}
                        onChange={(e) => setLabExecutiveEmail(e.target.value)}
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="class/semester"
                        name="class/semester"
                        label="Class/Semester"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom></Typography>
            <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
                Secretary (optional)
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        value={secretaryName}
                        onChange={(e) => setSecretaryName(e.target.value)}
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
                            value={secretaryGender}
                            onChange={(e) => setSecretaryGender(e.target.value)}
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
                        value={secretaryContact}
                        onChange={(e) => setSecretaryContact(e.target.value)}
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
                        value={secretaryEmail}
                        onChange={(e) => setSecretaryEmail(e.target.value)}
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="class/semester"
                        name="class/semester"
                        label="Class/Semester"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom></Typography>
            <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
                Treasurer (optional)
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        value={treasurerName}
                        onChange={(e) => setTreasurerName(e.target.value)}
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
                            value={treasurerGender}
                            onChange={(e) => setTreasurerGender(e.target.value)}
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
                        value={treasurerContact}
                        onChange={(e) => setTreasurerContact(e.target.value)}
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
                        value={treasurerEmail}
                        onChange={(e) => setTreasurerEmail(e.target.value)}
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="class/semester"
                        name="class/semester"
                        label="Class/Semester"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
            <Grid>
                <Button type="submit" color="primary" variant="contained" onClick={handleSubmit}>
                    Save
                </Button>
            </Grid>
        </React.Fragment>
    );
}

export default Step2Form;
