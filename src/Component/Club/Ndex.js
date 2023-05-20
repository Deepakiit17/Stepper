import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import RegistrationForm from "./TeamRegistrationForm";
// import PaymentForm from "./PaymentForm";
// import AddTeamMemberForm from "./AddTeamMeForm";
// import ShippingAddress from "./ShippingAddress";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  TOAST_DISMISS,
  TOAST_LOADING,
  TOAST_SUCCESS,
  TOAST_WARN,
} from "../../../utils/index";

import {
  onAddressData,
  onPaymentData,
  onRegistrationData,
  onTeamData,
} from "../../../action/islpAction";
import RegistrationForm from "./ClubRegistrationForm";
import AddTeamMemberForm from "./AddClubMember";
import PaymentForm from "../PaymentForm";
import Paytm from "./paytm";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" target={"_blank"} href="ilearnplace.com">
        ilearnplace.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = [
  "Team Registration",
  "Add Team Member",
  "Shipping Address",
  "Payment Details",
];

function getStepContent(
  activeStep,
  registrationData,
  teamData,
  addressData,
  paymentData
) {
  switch (activeStep) {
    case 0:
      return <RegistrationForm registrationData={registrationData} />;
    case 1:
      return <AddTeamMemberForm teamData={teamData} />;
    case 2:
      // return <ShippingAddress addressData={addressData} />;
    case 3:
      // return <PaymentForm paymentData={paymentData} />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Ragistration() {
  const [activeStep, setActiveStep] = useState(0);
  const history = useHistory();
  //resistration form data
  const [teamName, setTeamName] = useState();
  const [teamName_err, setTeamName_err] = useState(false);
  const [project, setProject] = useState("Totoka Smart City");
  const [idea, setIdea] = useState("");
  const [ideaDiscription, setIdeaDiscription] = useState("");
  const [name, setName] = useState();
  const [name_err, setName_err] = useState(false);
  const [contact, setContact] = useState();
  const [contact_err, setContact_err] = useState(false);
  const [email, setEmail] = useState("");
  const [email_err, setEmail_err] = useState(false);
  //team form data
  const [themeId, setThemeId] = useState();
  const [mamber_1, setMamber_1] = useState({
    name: "",
    contact: "",
    email: "",
  });
  const [mamber_2, setMamber_2] = useState({
    name: "",
    contact: "",
    email: "",
  });
  const [mamber_3, setMamber_3] = useState({
    name: "",
    contact: "",
    email: "",
  });
  const [mamber_4, setMamber_4] = useState({
    name: "",
    contact: "",
    email: "",
  });
  const [mamber_5, setMamber_5] = useState({
    name: "",
    contact: "",
    email: "",
  });
  const [teamSize, setTeamSize] = useState(0);
  //address data
  const [address, setAddress] = useState();
  const [address_err, setAddress_err] = useState(false);
  const [state, setState] = useState();
  const [state_err, setState_err] = useState(false);
  const [pinCode, setPinCode] = useState();
  const [pinCode_err, setPinCode_err] = useState(false);
  //amount data
  const [totalAmount, setTotleAmount] = useState();
  const registrationData = {
    teamName: teamName,
    setTeamName: setTeamName,
    teamName_err: teamName_err,
    setTeamName_err: setTeamName_err,
    project: project,
    setProject: setProject,
    idea: idea,
    setIdea: setIdea,
    ideaDiscription: ideaDiscription,
    setIdeaDiscription: setIdeaDiscription,
    name: name,
    name_err: name_err,
    setName: setName,
    setName_err: setName_err,
    contact: contact,
    contact_err: contact_err,
    setContact: setContact,
    setContact_err: setContact_err,
    email: email,
    email_err: email_err,
    setEmail: setEmail,
    setEmail_err: setEmail_err,
  };

  const teamData = {
    teamSize: teamSize,
    setTeamSize: setTeamSize,
    mamber_1: mamber_1,
    setMamber_1: setMamber_1,
    mamber_2: mamber_2,
    setMamber_2: setMamber_2,
    mamber_3: mamber_3,
    setMamber_3: setMamber_3,
    mamber_4: mamber_4,
    setMamber_4: setMamber_4,
    mamber_5: mamber_5,
    setMamber_5: setMamber_5,
  };

  const addressData = {
    address: address,
    address_err: address_err,
    setAddress: setAddress,
    setAddress_err: setAddress_err,
    state: state,
    state_err: state_err,
    setState: setState,
    setState_err: setState_err,
    pinCode: pinCode,
    pinCode_err: pinCode_err,
    setPinCode_err: setPinCode_err,
    setPinCode: setPinCode,
  };
  const paymentData = { setTotleAmount: setTotleAmount, teamSize: teamSize };

  const handleNext = () => {
    TOAST_LOADING("Please Wait...");

    let R_data = {
      team_name: teamName,
      stem_project_idea: idea,
      project_description: ideaDiscription,
      ilp_game: project,
      name: name,
      contact: contact,
      email: email,
      is_captain: true,
    };
    let teamData = {
      team_id: themeId,
      students: [
        { ...mamber_1 },
        { ...mamber_2 },
        { ...mamber_3 },
        { ...mamber_4 },
        { ...mamber_5 },
      ],
    };
    let addressData = {
      team_id: themeId,
      address: address,
      state: state,
      district: "jaipur",
      pincode: pinCode,
    };
    // console.log("teamName.length > 4 ", name & (name.length < 3));
    switch (activeStep) {
      case 0:
        if (
          name &&
          teamName.length > 4 &&
          contact &&
          contact.length > 9 &&
          name &&
          name.length > 2
        ) {
          onRegistrationData(R_data)
            .then((res) => {
              if (res) {
                console.log(res);
                const { response_data, success } = res.data;
                // console.log("responseData.them_id", res.data);
                if (success) {
                  TOAST_DISMISS();
                  TOAST_SUCCESS("Team Sucessfully Registred");
                  setThemeId(response_data.team_id);
                  setActiveStep(activeStep + 1);
                } else {
                  TOAST_WARN("somthing went rong");
                }
              }
            })
            .catch(function (error) {
              TOAST_DISMISS();
              console.log("error", error);
              TOAST_WARN("Request failed");
            });
        } else {
          TOAST_DISMISS();
          teamName === undefined || teamName.length < 5
            ? setTeamName_err(true)
            : setTeamName_err(false);
          name === undefined || (name && name.length < 3)
            ? setName_err(true)
            : setName_err(false);
          contact === undefined || (contact && contact.length < 10)
            ? setContact_err(true)
            : setContact_err(false);
          email === undefined || email.length < 7
            ? setEmail_err(true)
            : setEmail_err(false);
          TOAST_WARN("Please fill requried details");
        }
        break;
      case 1:
        if (true) {
          let newTeamSize = teamData.students.filter(
            (item, index) => item.contact !== ""
          );
          console.log("newTeamSize", newTeamSize);
          onTeamData(teamData);
          setActiveStep(activeStep + 1);
          setTeamSize(newTeamSize?.length + 1);
        }
        break;
      case 2:
        if (
          address &&
          address.length > 9 &&
          state &&
          state.length > 3 &&
          pinCode &&
          pinCode.length > 5
        ) {
          onAddressData(addressData)
            .then((response) => {
              setActiveStep(activeStep + 1);
              TOAST_DISMISS();
              TOAST_SUCCESS("Success");
            })
            .catch(function (error) {
              TOAST_WARN("somthig went wrong");
              console.log(error);
            });
        } else {
          TOAST_DISMISS();
          address === undefined || address.length < 10
            ? setAddress_err(true)
            : setAddress_err(false);
          state === undefined || state.length < 4
            ? setState_err(true)
            : setState_err(false);
          pinCode === undefined || pinCode.length < 6
            ? setPinCode_err(true)
            : setPinCode_err(false);
          TOAST_WARN("Please fill requried details");
        }
        break;
      case 3:
        onPaymentData(paymentData);
        setActiveStep(activeStep + 1);
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="primary"
        style={{ backgroundColor: "#272a33" }}
        elevation={0}
        sx={{
          position: "sticky",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            ISLP Ragistration
          </Typography>
          <button
            className="btn btn-primary navbar-btn btn-rounded waves-effect waves-light"
            type="button"
            onClick={() => history.push("/")}
          >
            Home
          </button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 6 } }}
          style={{
            backgroundColor: "#f4f4f4",
            boxShadow: "3px 4px 4px -2px rgb(0 0 0 / 20%)",
            borderRadius: 20,
          }}
        >
          <Typography component="h1" variant="h4" align="center">
            {steps.filter((item, index) => (index === activeStep ? item : ""))}
          </Typography>
          <Stepper
            activeStep={activeStep}
            sx={{ pt: 3, pb: 5 }}
            style={{ overflow: "auto" }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you !
              </Typography>
              <Typography variant="subtitle1">
                You have successfully registered your team. The Ilearnplace STEM
                kit will be deliver to all registered team member. Login to{" "}
                <a
                  href="www.ilearnplace.com"
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  {" "}
                  www.ilearnplace.com{" "}
                </a>
                and start playing ILP stem learning game. Please reach out to
                <a
                  href="info@ilearnplace.com"
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  {" "}
                  info@ilearnplace.com
                </a>{" "}
                or +91-8094414990 for any kind of support.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(
                activeStep,
                registrationData,
                teamData,
                addressData,
                paymentData
              )}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: 3,
                  ml: 1,
                }}
              >
                {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}

                {activeStep === steps.length - 1 ? (
                  <Paytm
                    team_id={themeId}
                    totalAmount={totalAmount}
                    handleNext={handleNext}
                  />
                ) : (
                  <Button variant="contained" onClick={handleNext}>
                    Next
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
