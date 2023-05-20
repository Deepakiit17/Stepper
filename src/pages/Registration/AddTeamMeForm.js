import * as React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AddTeamMember from "./TeamMember";
import { useState } from "react";
import { Box } from "@mui/system";

export default function AddTeamMemberForm(props) {
  const [Teams, addTeams] = useState({ member: [1] });
  const {
    mamber_1,
    mamber_2,
    mamber_3,
    mamber_4,
    mamber_5,
    setMamber_1,
    setMamber_2,
    setMamber_3,
    setMamber_4,
    setMamber_5,
    teamSize,
    setTeamSize,
  } = props.teamData;
  // console.log("teamSize,setTeamSize", teamSize,setTeamSize)

  const addAnother = () => {
    addTeams({ member: [...Teams.member, 1] });
    // setTeamSize(teamSize+1)
  };
  const removeAnother = () => {
    const newTeams = Teams.member.filter(
      (item, index) => index !== Teams.member.length - 1
    );
    addTeams({ member: newTeams });
    setTeamSize(teamSize-1)
  };

  return (
    <React.Fragment>
      {Teams?.member?.map((item, index) => (
        <AddTeamMember //onChangeMamber_1={onChangeMamber_1}
          no={index + 1}
          key={index}
          mamber_1={
            index === 0
              ? mamber_1
              : index === 1
              ? mamber_2
              : index === 2
              ? mamber_3
              : index === 3
              ? mamber_4
              : index === 4
              ? mamber_5
              : ""
          }
          setMamber_1={
            index === 0
              ? setMamber_1
              : index === 1
              ? setMamber_2
              : index === 2
              ? setMamber_3
              : index === 3
              ? setMamber_4
              : index === 4
              ? setMamber_5
              : ""
          }
        />
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          mt: 5,
          ml: 1,
        }}
      >
        {/* <Typography sx={{ mt: 5, ml: 1 }} variant="h6" gutterBottom> */}
        {Teams?.member?.length < 5 ? (
          <Button
            onClick={() => addAnother()}
            startIcon={<AddIcon />}
            variant="contained"
            style={{ marginRight: 10 }}
          >
            Add Team member
          </Button>
        ) : null}
        {Teams?.member?.length > 1 ? (
          <Button
            onClick={() => removeAnother()}
            startIcon={<RemoveIcon />}
            variant="contained"
          >
            Remove Team member
          </Button>
        ) : null}
        {/* </Typography> */}
      </Box>
    </React.Fragment>
  );
}
