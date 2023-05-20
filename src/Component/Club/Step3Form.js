import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, TextField, Typography, Avatar, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Form from './Form';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
    },
    memberList: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    memberAvatar: {
        backgroundColor: theme.palette.primary.main,
    },
}));

const Step3Form = () => {
    const classes = useStyles();
    const [members, setMembers] = useState([{ name: '', gender: '', contact: '', email: '' }]);

    const handleMemberChange = (index, key, value) => {
        const newMembers = [...members];
        newMembers[index][key] = value;
        setMembers(newMembers);
    };

    const removeMember = (index) => {
        const newMembers = [...members];
        newMembers.splice(index, 1);
        setMembers(newMembers);
    };

    const addMember = () => {
        const newMember = { name: '', gender: '', contact: '', email: '' };
        setMembers([...members, newMember]);
    };

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [classSemester, setClassSemester] = useState('');
    const [clubId, setClubId] = useState(20);

    const handleSubmit = async (e) => {
        e.preventDefault();
        var token = localStorage.getItem("token");
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                club_id: 25,
                name,
                contact,
                email,
                gender,
                class_semester: classSemester
            }),
            redirect: 'follow'
        };

        try {
            const response = await fetch('http://15.206.189.238:8000/ilpapp2/club/add_member/registration', requestOptions);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.log('error', error);
        }
    };
    return (
        <div className={classes.root}>
            <List className={classes.memberList}>
                {members.map((member, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar className={classes.memberAvatar}>
                                <Typography variant="h6">{index + 1}</Typography>
                            </Avatar>
                        </ListItemAvatar>
                        <Typography variant="h6" gutterBottom></Typography>
                        <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom>
                            Add Club Member
                        </Typography>
                        {/* <Form /> */}
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="name"
                                    name="name"
                                    label="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
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
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={classSemester}
                                    onChange={(e) => setClassSemester(e.target.value)}
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" color="primary" onClick={() => removeMember(index)}>
                                    Delete
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" color="primary" onClick={handleSubmit}>
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                        {/* <ListItemSecondaryAction>
                            <IconButton onClick={() => removeMember(index)}>
                                <DeleteIcon />
                                Delete
                            </IconButton>
                        </ListItemSecondaryAction> */}
                    </ListItem>

                ))}
            </List>
            <Button variant="contained" color="primary" onClick={addMember}>
                Add More Member
            </Button>
        </div>
    );
};

export default Step3Form;
