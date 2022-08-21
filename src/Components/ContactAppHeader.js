import React, {useState} from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';  
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function ContactAppHeader(props) {
  const [userId, setUserId] = useState(props.userId);

  const handleUserSelect = (event) => {
    setUserId(event.target.value);
    props.setSelectedUserId(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacts
          </Typography>
          <Typography component="div" style={{margin:"5px"}}>
            User Name: 
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userId}
            onChange={handleUserSelect}
            style={{width:"120px"}}
          >
            {props.usersList.map((user)=>{
              return(
                <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
              );
            })}
          </Select>
        </Toolbar>
      </AppBar>
    </Box>
  );
}