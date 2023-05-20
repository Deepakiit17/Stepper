import React, { useEffect, useState } from "react";
// import { NavItem } from "reactstrap";
// import IdeaImage from './bulb-idea-design-38625059.jpeg';
import Profile from "./profile";
import Image from './assets/Image.jpga.jpg';
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddMember from "./AddMember";
// import { borderBottom } from "@mui/system";
import { Button } from "@mui/material";
// import { Dialog } from "@material-ui/core";
import TeamEdit from "./TeamEdit";
import Paytm from "../pages/NewIslp/Registration/paytm";
// import data from './dummy.json';
// import Login from "../components/Navbar/login";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function MyComponent() {
  let [students, changeData] = useState([]);
  let [team_name, setTeam_name] = useState("");
  let [stem_project_idea, setstem_project_idea] = useState("");
  let [project_descripition, setproject_descripition] = useState("");
  const [value, setValue] = useState(0);
  const [team_id, setTeamId] = useState();
  const amount = 129;
  const [data, setData] = useState()

  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEditClick = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  useEffect(() => {
    getIsplDetails()
  }, [])

  const getIsplDetails = () => {
    var token = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
    fetch(`${process.env.REACT_APP_BASE_URL}ispl/team/details`, requestOptions)
      .then(response => response.json())
      .then(result => {
        let data = result.Data[0].fields;
        changeData(data.student.slice(0, 5));
        setTeam_name(data.team_name);
        setstem_project_idea(data.stem_project_idea);
        setproject_descripition(data.project_description);
        setTeamId(result.Data[0].pk)
        setData(data)
        // setAmount(amount)
      })
      .catch(error => console.log('error', error));
  }

  let updateApi = (data) => {
    console.log("---------===", data);
    let newStudents = students.map(item => {
      if (item.id === data.id) {
        return {
          "id": item.id,
          "name": data.name,
          "contact": data.contact,
          "email": data.email,
          "school_name": data.schoolName,
          "address": data.address,
          "is_lead": "True"
        }
      }
      return item
    })

    // var raw = JSON.stringify({
    //   "id": 56,
    //   "team_name": team_name,
    //   "stem_project_idea": stem_project_idea,
    //   "project_descripition": project_descripition,
    //   "students": newStudents
    // });
    // console.log("raw----", raw);

    var token = localStorage.getItem('token');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    console.log(data, "qwy");
    var raw = JSON.stringify({
      "name": data.name,
      "stu_id": data.id,
      "email": data.email,
      "contact": data.contact,
      "school_name": data.schoolName,
      "address": data.address,
      // "is_captain": data.is_captain
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_BASE_URL}ispl/student/update`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

  return (
    <div>
      <div style={{ backgroundImage: `url(${Image})`, marginBottom: '50px', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', height: '180px', padding: '10px', borderRadius: '10px', backgroundSize: 'contain', }} >
        <div style={{}} >
          <div style={{ display: 'flex', marginBottom: '6px' }} >
            <Avatar src={require("./assets/teamIcon.jpeg")} />
            <div style={{ fontSize: '20px', paddingLeft: '30px', fontWeight: '800' }} >  {team_name}</div>
          </div>
        </div>
      </div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Team members" {...a11yProps(0)} />
            <Tab label="Project Details" {...a11yProps(1)} />
            <Tab label="Competition Rules" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              alignContent: 'space-between',
              justifyContent: 'space-evenly',
              alignItems: 'baseline',
              marginTop: '25px',
            }}
          >
            {
              students.map((item) => {

                return <Profile
                  updateApi={updateApi}
                  id={item.id}
                  name={item.name}
                  email={item.email}
                  schoolname={item.school_name}
                  schooladdress={item.address}
                  contact={item.contact}
                />
              })
            }

          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              alignContent: 'space-between',
              justifyContent: 'space-evenly',
              alignItems: 'baseline',
              marginTop: '25px',
            }}
          >
            <AddMember
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignContent: 'space-between',
                justifyContent: 'space-evenly',
                alignItems: 'baseline'
              }}
              team_id={team_id}
              data={data}
              amount={amount}
            />
            <Paytm team_id={team_id}         />
          </div>
        </TabPanel >
        <div style={{ position: 'relative' }}>
          <TabPanel value={value} index={1}>
            <div>
              <h3>Project idea name</h3>
              {stem_project_idea}
            </div>
            <div>
              <h3>Project idea Description</h3>
              {project_descripition}
            </div>
            <div style={{ position: 'absolute', top: '25%', left: '80%', transform: 'translate(-50%, -50%)' }}>
              <Button onClick={handleEditClick}>
                <TeamEdit team_name={team_name} stem_project_idea={stem_project_idea} project_descripition={project_descripition} getIsplDetails={getIsplDetails} />
              </Button>
            </div>
          </TabPanel>
        </div>
        <TabPanel value={value} index={2}>
          No Rules added yet
        </TabPanel>
      </Box>
    </div >
  )
}

export default MyComponent;